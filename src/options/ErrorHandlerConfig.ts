import { defaultErrorHandlerResolver } from '../resolvers'
import { ErrorHandlerLevels, ErrorHandlerResolver } from '../definitions'

/**
 * Logging options.
 *
 * This interface defines the configuration options for logging, including the logger instance,
 * settings for duplicate error reporting, error classes to ignore, and log levels for different error classes.
 */
export interface ErrorHandlerConfig<R = unknown> {
  /**
   * Whether to avoid reporting the same error multiple times.
   * If set to true, errors that have already been reported will not be logged again.
   * Optional property.
   */
  withoutDuplicates?: boolean

  /**
   * A set of error classes that should not be reported.
   * For example: new Set([TypeError])
   * Optional property.
   */
  dontReport?: Set<new (...args: any[]) => Error>

  /**
   * Defines the log levels for specific error classes.
   * This mapping allows different log levels to be associated with different types of errors.
   * For example: { 'warn': [TypeError, ReferenceError] }
   * Optional property.
   */
  levels?: ErrorHandlerLevels

  /**
   * The class type resolver used to create instances of the errorHandler.
   */
  resolver: ErrorHandlerResolver<R>
}

/**
 * Logging settings for all adapters.
 *
 * This object defines the global logging settings for all adapters in the application.
 * It allows configuration of the logger instance, error reporting behavior, and error class log levels.
 */
export const errorHandler: ErrorHandlerConfig = {
  // The class type resolver used to create instances of the errorHandler.
  resolver: defaultErrorHandlerResolver,

  // Define error class log levels. For example: { 'warn': [TypeError] }.
  levels: {} as any,

  // Error classes that should not be reported. For example: new Set([TypeError]).
  dontReport: new Set(),

  // Whether to report an error multiple times if it has already been reported.
  withoutDuplicates: false
}
