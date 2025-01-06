import { isConstructor } from './utils'
import { Config } from '@stone-js/config'
import { ConsoleLogger } from './ConsoleLogger'
import { KernelEvent } from './events/KernelEvent'
import { EventEmitter } from './events/EventEmitter'
import { IncomingEvent } from './events/IncomingEvent'
import { Container } from '@stone-js/service-container'
import { OutgoingResponse } from './events/OutgoingResponse'
import { InitializationError } from './errors/InitializationError'
import { MixedPipe, Pipe, PipeInstance, Pipeline, PipelineOptions } from '@stone-js/pipeline'
import { EventHandler, EventHandlerFunction, HookContext, IBlueprint, IErrorHandler, ILogger, IProvider, IRouter, LifecycleEventHandler, RouterResolver } from './definitions'

/**
 * KernelOptions.
 */
export interface KernelOptions {
  logger: ILogger
  container: Container
  blueprint: IBlueprint
  eventEmitter: EventEmitter
}

/**
 * Class representing a Kernel.
 *
 * The Kernel class is responsible for managing the main lifecycle of the application, including middleware
 * registration and provider management. It manages the initialization, registration, and booting of the
 * components required for a fully functional application.
 *
 * @author Mr. Stone <evensstone@gmail.com>
 */
export class Kernel<IncomingEventType extends IncomingEvent, OutgoingResponseType extends OutgoingResponse> implements LifecycleEventHandler<IncomingEventType, OutgoingResponseType> {
  protected readonly logger: ILogger
  protected readonly container: Container
  protected readonly blueprint: IBlueprint
  protected readonly eventEmitter: EventEmitter
  protected readonly registeredProviders: Set<string>
  protected readonly providers: Set<IProvider<IncomingEventType, OutgoingResponseType>>

  private resolvedRouter?: IRouter<IncomingEventType, OutgoingResponseType>
  private resolvedLifecycleHandler?: LifecycleEventHandler<IncomingEventType, OutgoingResponseType>

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   * @returns A new Kernel instance.
   */
  public static create<IncomingEventType extends IncomingEvent, OutgoingResponseType extends OutgoingResponse>(options: KernelOptions): Kernel<IncomingEventType, OutgoingResponseType> {
    return new this(options)
  }

  /**
   * Create a Kernel.
   *
   * @param options - Kernel configuration options.
   */
  protected constructor ({ blueprint, container, eventEmitter, logger }: KernelOptions) {
    if (!(blueprint instanceof Config)) { throw new InitializationError('Blueprint is required to create a Kernel instance.') }
    if (!(container instanceof Container)) { throw new InitializationError('Container is required to create a Kernel instance.') }
    if (!(eventEmitter instanceof EventEmitter)) { throw new InitializationError('EventEmitter is required to create a Kernel instance.') }

    this.logger = logger
    this.providers = new Set()
    this.blueprint = blueprint
    this.container = container
    this.eventEmitter = eventEmitter
    this.registeredProviders = new Set()
  }

  /**
   * Hook that runs before creating the event context.
   * Useful to setup things.
   */
  public async onPrepare (): Promise<void> {
    this.registerBaseBindings()
    this.resolveProviders()

    for (const provider of this.providers) {
      await provider.onPrepare?.()
    }

    await this.registerProviders()
    await this.resolveLifecycleHandler()?.onPrepare?.()
  }

  /**
   * Hook that runs before handling each event.
   * Useful to initialize things at each event.
   */
  public async beforeHandle (): Promise<void> {
    for (const provider of this.providers) {
      await provider.beforeHandle?.()
    }

    await this.bootProviders()
    await this.resolveLifecycleHandler()?.beforeHandle?.()
  }

  /**
   * Handle IncomingEvent.
   *
   * @param event - The incoming event to handle.
   * @returns The outgoing response.
   */
  public async handle (event: IncomingEventType): Promise<OutgoingResponseType> {
    return await this.sendEventThroughDestination(event)
  }

  /**
   * Hook that runs after handling each event.
   * Useful for cleanup tasks.
   */
  public async afterHandle (context: HookContext<IncomingEventType, OutgoingResponseType>): Promise<void> {
    for (const provider of this.providers) {
      await provider.afterHandle?.(context)
    }

    await this.resolveLifecycleHandler()?.afterHandle?.(context)
  }

  /**
   * Hook that runs just before or just after returning the response.
   * Useful to perform cleanup.
   */
  public async onTerminate (context: Partial<HookContext<IncomingEventType, OutgoingResponseType>>): Promise<void> {
    await this.resolveLifecycleHandler()?.onTerminate?.(context)

    for (const provider of this.providers) {
      await provider.onTerminate?.(context)
    }
  }

  /**
   * Send event to the destination.
   *
   * @param event - The incoming event.
   * @returns The prepared response.
   */
  protected async sendEventThroughDestination (event: IncomingEventType): Promise<OutgoingResponseType> {
    if (event === undefined) { throw new InitializationError('No IncomingEvent provided.') }
    if (typeof event.clone === 'function') { this.container.instance('originalEvent', event.clone()) }

    this.container.instance('event', event).instance('request', event)

    try {
      return await Pipeline
        .create<IncomingEventType, OutgoingResponseType>(this.makePipelineOptions())
        .send(event)
        .through(this.blueprint.get<MixedPipe[]>('stone.kernel.middleware', []))
        .then(async (ev) => await this.prepareResponse(ev))
    } catch (error: any) {
      const errorHandler = this.getErrorHandler(error)

      if (errorHandler === undefined) {
        throw error
      } else {
        const response = await errorHandler.handle(error, event)
        return await response.prepare(event, this.blueprint)
      }
    }
  }

  /**
   * Prepare response before sending
   *
   * @protected
   * @param event - The Kernel event.
   * @returns The prepared response.
   */
  protected async prepareResponse (event: IncomingEventType): Promise<OutgoingResponseType> {
    let response: OutgoingResponseType
    const router = this.resolveRouter()
    const handler = this.resolveLifecycleHandler()

    if (router !== undefined) {
      response = await router.dispatch(event)
    } else if (handler !== undefined) {
      response = await this.executeHandler(handler, event)
    } else {
      throw new InitializationError('No routers nor handlers have been provided.')
    }

    if (response === undefined) {
      throw new InitializationError('No response was returned')
    } else if (typeof response.prepare !== 'function') {
      throw new InitializationError('Return response must be an instance of `OutgoingResponse` or a subclass of it.')
    }

    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.PREPARING_RESPONSE, source: this, metadata: { event, response } }))
    response = await response.prepare(event, this.blueprint)
    this.eventEmitter.emit(KernelEvent.create({ type: KernelEvent.RESPONSE_PREPARED, source: this, metadata: { event, response } }))

    return response
  }

  /**
   * Creates pipeline options for the Kernel.
   *
   * @protected
   * @returns The pipeline options for configuring middleware.
   */
  protected makePipelineOptions (): PipelineOptions<IncomingEventType, OutgoingResponseType> {
    return {
      resolver: (middleware: Pipe) => {
        if (isConstructor(middleware)) {
          return this.container.resolve<PipeInstance<IncomingEventType, OutgoingResponseType>>(middleware, true)
        }
      }
    }
  }

  /**
   * Registers the base bindings into the container.
   *
   * @private
   * @returns The Kernel instance.
   */
  private registerBaseBindings (): this {
    this.container
      .instance(Config, this.blueprint)
      .instance(Container, this.container)
      .instance(ConsoleLogger, this.logger)
      .instance(EventEmitter, this.eventEmitter)
      .alias(Config, 'config')
      .alias(Config, 'blueprint')
      .alias(Container, 'container')
      .alias(EventEmitter, 'events')
      .alias(ConsoleLogger, 'logger')
      .alias(EventEmitter, 'eventEmitter')

    return this
  }

  /**
   * Resolves the event handler from the container.
   *
   * @returns The resolved event handler or undefined if not found.
   */
  private resolveLifecycleHandler (): LifecycleEventHandler<IncomingEventType, OutgoingResponseType> | undefined {
    if (this.resolvedLifecycleHandler === undefined) {
      this.resolvedLifecycleHandler = this.blueprint.get<LifecycleEventHandler<IncomingEventType, OutgoingResponseType>>('stone.handler')
      if (isConstructor(this.resolvedLifecycleHandler)) {
        this.resolvedLifecycleHandler = this.container.resolve(this.resolvedLifecycleHandler, true)
      }
    }

    return this.resolvedLifecycleHandler
  }

  /**
   * Retrieves the router instance from the RouterResolver.
   *
   * @returns The router instance if available, otherwise undefined.
   */
  private resolveRouter (): IRouter<IncomingEventType, OutgoingResponseType> | undefined {
    if (this.resolvedRouter === undefined) {
      const resolver = this.blueprint.get<RouterResolver<IncomingEventType, OutgoingResponseType>>('stone.kernel.routerResolver')
      if (resolver !== undefined) {
        this.resolvedRouter = resolver(this.container)
      }
    }

    return this.resolvedRouter
  }

  /**
   * Resolves all providers defined in the blueprint.
   *
   * @private
   * @returns The Kernel instance.
   */
  private resolveProviders (): this {
    this.blueprint
      .get<Function[]>('stone.providers', [])
      .map((provider) => this.container.resolve<IProvider<IncomingEventType, OutgoingResponseType>>(provider, true))
      .filter((provider) => provider.mustSkip === undefined || !(provider.mustSkip?.()))
      .forEach((provider) => this.providers.add(provider))

    return this
  }

  /**
   * Registers the providers.
   *
   * @private
   * @returns A promise that resolves when all providers are registered.
   */
  private async registerProviders (): Promise<void> {
    for (const provider of this.providers) {
      if (provider.register === undefined || this.registeredProviders.has(provider.constructor.name)) {
        continue
      }

      await provider.register()

      this.registeredProviders.add(provider.constructor.name)
    }
  }

  /**
   * Boots the providers.
   *
   * @private
   * @returns A promise that resolves when all providers have been booted.
   */
  private async bootProviders (): Promise<void> {
    for (const provider of this.providers) {
      await provider.boot?.()
    }
  }

  /**
   * Executes the resolved event handler for the given event.
   *
   * @param handler - The event handler to execute.
   * @param event - The incoming event to be processed.
   * @returns A promise that resolves to the outgoing response.
   */
  private async executeHandler (handler: EventHandler<IncomingEventType, OutgoingResponseType>, event: IncomingEventType): Promise<OutgoingResponseType> {
    if (typeof (handler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>).handle === 'function') {
      return await (handler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>).handle(event)
    }
    return await (handler as EventHandlerFunction<IncomingEventType, OutgoingResponseType>)(event)
  }

  /**
   * Get the error handler for the given error.
   *
   * @param error - The error to get the handler for.
   * @returns The error handler.
   */
  private getErrorHandler (error: Error): IErrorHandler<IncomingEventType, OutgoingResponseType> | undefined {
    const handlers = this.blueprint.get<Record<string, IErrorHandler<IncomingEventType, OutgoingResponseType>>>('stone.kernel.errorHandlers', {})
    const ErrorHandler = handlers[error.name] ?? handlers.default

    if (isConstructor(ErrorHandler)) {
      return this.container.resolve<IErrorHandler<IncomingEventType, OutgoingResponseType>>(ErrorHandler, true)
    }
  }
}
