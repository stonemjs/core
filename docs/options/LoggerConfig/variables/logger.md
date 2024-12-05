[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [options/LoggerConfig](../README.md) / logger

# Variable: logger

> `const` **logger**: [`LoggerConfig`](../interfaces/LoggerConfig.md)

**Default Logger Configuration**

The `logger` constant provides a default setup for the logger.
It includes the following default settings:

- **Log Level**: `'error'` — Only logs error messages.
- **Color Output**: Disabled — Logs are displayed without color formatting.
- **Timestamp**: Disabled — Timestamps are not included in log messages.
- **Resolver**: `defaultLoggerResolver` — Uses the default logger resolver function.

This default configuration can be overridden by providing a custom `LoggerConfig` object.

## Defined in

[src/options/LoggerConfig.ts:70](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/LoggerConfig.ts#L70)
