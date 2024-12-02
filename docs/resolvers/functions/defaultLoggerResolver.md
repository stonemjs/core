[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [resolvers](../README.md) / defaultLoggerResolver

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

[src/resolvers.ts:19](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/resolvers.ts#L19)
