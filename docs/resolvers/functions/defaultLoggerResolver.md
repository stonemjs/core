[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

Defined in: [resolvers.ts:18](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/resolvers.ts#L18)

Default logger resolver function.

This function resolves the logger for the application, using the blueprint configuration.
By default, it creates a `ConsoleLogger` instance with the provided blueprint.

## Parameters

### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint configuration to use for the logger.

## Returns

[`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

A `ConsoleLogger` instance.
