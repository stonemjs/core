import { LoggerResolver } from '../definitions'
import { defaultLoggerResolver } from '../resolvers'

/**
 * **LoggerConfig Interface**
 *
 * Represents the base configuration options for an `ILogger` instance.
 * This allows customization of logging behavior, including log level,
 * output styling, and the logger resolver.
 */
export interface LoggerConfig {
  /**
   * The log level for the logger.
   *
   * Defines the minimum level of log messages that should be logged.
   * Common values include:
   * - `'trace'`: Fine-grained debug information
   * - `'debug'`: Debug information
   * - `'info'`: Informational messages
   * - `'warn'`: Warnings
   * - `'error'`: Errors that need immediate attention
   *
   * @default `'error'`
   */
  level?: 'trace' | 'debug' | 'info' | 'warn' | 'error'

  /**
   * Whether to enable color output in the logs.
   *
   * Useful for improving log readability, especially in terminal environments
   * or when using third-party loggers such as Pino.
   *
   * @default `false`
   */
  useColors?: boolean

  /**
   * Defines whether to include a timestamp in log messages.
   *
   * Adding timestamps helps in tracking when each log event occurred.
   *
   * @default `false`
   */
  useTimestamp?: boolean

  /**
   * A resolver function that returns a logger instance.
   *
   * Allows you to customize the logger used by the application.
   * This function provides a way to inject a logger that suits specific requirements.
   *
   * @default `defaultLoggerResolver`
   */
  resolver?: LoggerResolver
}

/**
 * **Default Logger Configuration**
 *
 * The `logger` constant provides a default setup for the logger.
 * It includes the following default settings:
 *
 * - **Log Level**: `'error'` — Only logs error messages.
 * - **Color Output**: Disabled — Logs are displayed without color formatting.
 * - **Timestamp**: Disabled — Timestamps are not included in log messages.
 * - **Resolver**: `defaultLoggerResolver` — Uses the default logger resolver function.
 *
 * This default configuration can be overridden by providing a custom `LoggerConfig` object.
 */
export const logger: LoggerConfig = {
  level: 'error',
  useColors: false,
  useTimestamp: false,
  resolver: defaultLoggerResolver
}
