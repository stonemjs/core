[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/LoggerConfig](../README.md) / logger

# Variable: logger

> `const` **logger**: [`LoggerConfig`](../interfaces/LoggerConfig.md)

Defined in: [options/LoggerConfig.ts:70](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/options/LoggerConfig.ts#L70)

**Default Logger Configuration**

The `logger` constant provides a default setup for the logger.
It includes the following default settings:

- **Log Level**: `'error'` — Only logs error messages.
- **Color Output**: Disabled — Logs are displayed without color formatting.
- **Timestamp**: Disabled — Timestamps are not included in log messages.
- **Resolver**: `defaultLoggerResolver` — Uses the default logger resolver function.

This default configuration can be overridden by providing a custom `LoggerConfig` object.
