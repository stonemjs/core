import { RuntimeError } from './errors/RuntimeError'
import { IntegrationError } from './errors/IntegrationError'
import { ErrorHandlerLevels, ErrorHandlerRenderResponseResolver, IBlueprint, IErrorHandler, ILogger, LogLevel } from './definitions'

/**
 * ErrorHandlerOptions.
 */
export interface ErrorHandlerOptions<R, E extends RuntimeError = RuntimeError> {
  logger: ILogger
  blueprint: IBlueprint
  renderResponseResolver: ErrorHandlerRenderResponseResolver<R, E>
}

/**
 * Class representing an ErrorHandler.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class ErrorHandler<R, E extends RuntimeError = RuntimeError> implements IErrorHandler<R, E> {
  /**
   * The logger instance.
   */
  private readonly logger: ILogger

  /**
   * The log levels configured for error classes.
   */
  private readonly levels: ErrorHandlerLevels

  /**
   * List of error classes to ignore.
   */
  private readonly dontReport: Set<new (...args: any[]) => Error>

  /**
   * Set of errors that have been reported.
   */
  private readonly reportedError: Set<Error>

  /**
   * Whether to avoid reporting duplicate errors.
   */
  private withoutDuplicates: boolean

  /**
   * Handler to provide the render return response.
   */
  private readonly renderResponseResolver: ErrorHandlerRenderResponseResolver<R, E>

  /**
   * Create an ErrorHandler.
   *
   * @param options - The options to create an ErrorHandler.
   * @returns A new ErrorHandler instance.
   */
  static create<R, E extends RuntimeError = RuntimeError>(options: ErrorHandlerOptions<R, E>): ErrorHandler<R, E> {
    return new this(options)
  }

  /**
   * Create an ErrorHandler.
   *
   * @param container - Service container to resolve dependencies.
   */
  protected constructor ({ blueprint, logger, renderResponseResolver }: ErrorHandlerOptions<R, E>) {
    if (logger === undefined) { throw new IntegrationError('Logger is required to create an ErrorHandler instance.') }
    if (blueprint === undefined) { throw new IntegrationError('Blueprint is required to create an ErrorHandler instance.') }
    if (renderResponseResolver === undefined) { throw new IntegrationError('RenderResponseResolver is required to create an ErrorHandler instance.') }

    this.logger = logger
    this.reportedError = new Set()
    this.renderResponseResolver = renderResponseResolver
    this.withoutDuplicates = blueprint.get<boolean>('stone.errorHandler.dontReport', true)
    this.dontReport = blueprint.get<Set<new (...args: any[]) => Error>>('stone.errorHandler.dontReport', new Set())
    this.levels = blueprint.get<ErrorHandlerLevels>('stone.errorHandler.levels', { debug: [], info: [], warn: [], error: [], trace: [] })
  }

  /**
   * Determine log level by error class.
   *
   * @param Class - The error class.
   * @param level - The log level.
   * @returns This ErrorHandler instance.
   */
  level (Class: new (...args: any[]) => Error, level: LogLevel): this {
    this.levels[level] ??= []
    this.levels[level].push(Class)
    return this
  }

  /**
   * Do not report this error class.
   *
   * @param Class - The error class to ignore.
   * @returns This ErrorHandler instance.
   */
  ignore (Class: new (...args: any[]) => Error): this {
    this.dontReport.add(Class)
    return this
  }

  /**
   * Stop ignoring this error class.
   *
   * @param Class - The error class to stop ignoring.
   * @returns This ErrorHandler instance.
   */
  stopIgnoring (Class: new (...args: any[]) => Error): this {
    this.dontReport.delete(Class)
    return this
  }

  /**
   * Report this error class multiple times.
   *
   * @returns This ErrorHandler instance.
   */
  reportDuplicates (): this {
    this.withoutDuplicates = false
    return this
  }

  /**
   * Do not report this error class multiple times.
   *
   * @returns This ErrorHandler instance.
   */
  dontReportDuplicates (): this {
    this.withoutDuplicates = true
    return this
  }

  /**
   * Check if this error instance should be reported or not.
   *
   * @param error - The error instance to check.
   * @returns Whether the error should be reported.
   */
  shouldReport (error: Error): boolean {
    if (this.withoutDuplicates && this.reportedError.has(error)) {
      return false
    }

    return !Array.from(this.dontReport).some((Class) => error instanceof Class)
  }

  /**
   * Report this error instance.
   *
   * @param error - The error instance to report.
   * @returns This ErrorHandler instance.
   */
  report (error: E): this {
    if (this.shouldReport(error)) {
      this.reportError(error)
    }
    return this
  }

  /**
   * Prepare this error instance for rendering.
   *
   * @param error - The error instance to prepare.
   * @returns The rendered error object.
   */
  render (error: E): R {
    return this.renderResponseResolver(error)
  }

  /**
   * Report this error instance.
   *
   * @param error - The error instance to report.
   */
  private reportError (error: Error): void {
    this.reportedError.add(error)

    const errorContext = this.buildErrorContext(error)
    const level = (Object.entries(this.levels).find(([, classes]) => classes.find(Class => error instanceof Class))?.[0] ?? 'error')

    if (level in this.logger) {
      this.logger[level as keyof ILogger]?.(error.message, errorContext)
    } else {
      this.logger.error(error.message, errorContext)
    }
  }

  /**
   * Build error context object.
   *
   * @param error - The error instance to build context for.
   * @returns The error context object.
   */
  private buildErrorContext (error: any): Array<Record<string, unknown>> {
    const context: Array<Record<string, unknown>> = [{ error }]
    if ('context' in error) context.push(error.context)
    if ('metadata' in error) context.push(error.metadata)
    return context
  }
}
