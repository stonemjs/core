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

[src/resolvers.ts:19](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/resolvers.ts#L19)
