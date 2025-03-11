[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/LoggerConfig](../README.md) / logger

# Variable: logger

> `const` **logger**: [`LoggerConfig`](../interfaces/LoggerConfig.md)

Defined in: [core/src/options/LoggerConfig.ts:70](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/LoggerConfig.ts#L70)

**Default Logger Configuration**

The `logger` constant provides a default setup for the logger.
It includes the following default settings:

- **Log Level**: `'error'` — Only logs error messages.
- **Color Output**: Disabled — Logs are displayed without color formatting.
- **Timestamp**: Disabled — Timestamps are not included in log messages.
- **Resolver**: `defaultLoggerResolver` — Uses the default logger resolver function.

This default configuration can be overridden by providing a custom `LoggerConfig` object.
