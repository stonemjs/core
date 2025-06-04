[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/LoggerConfig](../README.md) / LoggerConfig

# Interface: LoggerConfig

Defined in: [options/LoggerConfig.ts:11](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/LoggerConfig.ts#L11)

**LoggerConfig Interface**

Represents the base configuration options for an `ILogger` instance.
This allows customization of logging behavior, including log level,
output styling, and the logger resolver.

## Properties

### level?

> `optional` **level**: [`LogLevel`](../../../declarations/enumerations/LogLevel.md)

Defined in: [options/LoggerConfig.ts:25](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/LoggerConfig.ts#L25)

The log level for the logger.

Defines the minimum level of log messages that should be logged.
Common values include:
- `'error'`: Errors that need immediate attention
- `'warn'`: Warnings
- `'info'`: Informational messages
- `'debug'`: Debug information
- `'trace'`: Fine-grained debug information

#### Default

`'error'`

***

### resolver?

> `optional` **resolver**: [`LoggerResolver`](../../../declarations/type-aliases/LoggerResolver.md)

Defined in: [options/LoggerConfig.ts:54](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/LoggerConfig.ts#L54)

A resolver function that returns a logger instance.

Allows you to customize the logger used by the application.
This function provides a way to inject a logger that suits specific requirements.

#### Default

`defaultLoggerResolver`

***

### useColors?

> `optional` **useColors**: `boolean`

Defined in: [options/LoggerConfig.ts:35](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/LoggerConfig.ts#L35)

Whether to enable color output in the logs.

Useful for improving log readability, especially in terminal environments
or when using third-party loggers such as Pino.

#### Default

`false`

***

### useTimestamp?

> `optional` **useTimestamp**: `boolean`

Defined in: [options/LoggerConfig.ts:44](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/LoggerConfig.ts#L44)

Defines whether to include a timestamp in log messages.

Adding timestamps helps in tracking when each log event occurred.

#### Default

`false`
