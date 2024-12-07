[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [options/LoggerConfig](../README.md) / LoggerConfig

# Interface: LoggerConfig

**LoggerConfig Interface**

Represents the base configuration options for an `ILogger` instance.
This allows customization of logging behavior, including log level,
output styling, and the logger resolver.

## Properties

### level?

> `optional` **level**: `"trace"` \| `"debug"` \| `"info"` \| `"warn"` \| `"error"`

The log level for the logger.

Defines the minimum level of log messages that should be logged.
Common values include:
- `'trace'`: Fine-grained debug information
- `'debug'`: Debug information
- `'info'`: Informational messages
- `'warn'`: Warnings
- `'error'`: Errors that need immediate attention

#### Default

`'error'`

#### Defined in

[src/options/LoggerConfig.ts:25](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/LoggerConfig.ts#L25)

***

### resolver?

> `optional` **resolver**: [`LoggerResolver`](../../../definitions/type-aliases/LoggerResolver.md)

A resolver function that returns a logger instance.

Allows you to customize the logger used by the application.
This function provides a way to inject a logger that suits specific requirements.

#### Default

`defaultLoggerResolver`

#### Defined in

[src/options/LoggerConfig.ts:54](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/LoggerConfig.ts#L54)

***

### useColors?

> `optional` **useColors**: `boolean`

Whether to enable color output in the logs.

Useful for improving log readability, especially in terminal environments
or when using third-party loggers such as Pino.

#### Default

`false`

#### Defined in

[src/options/LoggerConfig.ts:35](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/LoggerConfig.ts#L35)

***

### useTimestamp?

> `optional` **useTimestamp**: `boolean`

Defines whether to include a timestamp in log messages.

Adding timestamps helps in tracking when each log event occurred.

#### Default

`false`

#### Defined in

[src/options/LoggerConfig.ts:44](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/LoggerConfig.ts#L44)
