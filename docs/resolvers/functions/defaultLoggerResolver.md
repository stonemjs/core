[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../logger/ConsoleLogger/classes/ConsoleLogger.md)

Defined in: [resolvers.ts:18](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/resolvers.ts#L18)

Default logger resolver function.

This function resolves the logger for the application, using the blueprint configuration.
By default, it creates a `ConsoleLogger` instance with the provided blueprint.

## Parameters

### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint configuration to use for the logger.

## Returns

[`ConsoleLogger`](../../logger/ConsoleLogger/classes/ConsoleLogger.md)

A `ConsoleLogger` instance.
