[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ILogger`](../../definitions/interfaces/ILogger.md)

Default logger resolver function.

This function resolves the logger for the application, using the blueprint configuration.
By default, it creates a `ConsoleLogger` instance with the provided blueprint.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)\<`any`\>

The blueprint configuration to use for the logger.

## Returns

[`ILogger`](../../definitions/interfaces/ILogger.md)

- A `ConsoleLogger` instance.

## Defined in

[src/resolvers.ts:20](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/resolvers.ts#L20)
