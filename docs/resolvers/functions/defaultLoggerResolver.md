[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

Defined in: [resolvers.ts:18](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/resolvers.ts#L18)

Default logger resolver function.

This function resolves the logger for the application, using the blueprint configuration.
By default, it creates a `ConsoleLogger` instance with the provided blueprint.

## Parameters

### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint configuration to use for the logger.

## Returns

[`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

- A `ConsoleLogger` instance.
