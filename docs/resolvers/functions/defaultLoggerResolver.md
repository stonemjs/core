[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

Default logger resolver function.

This function resolves the logger for the application, using the blueprint configuration.
By default, it creates a `ConsoleLogger` instance with the provided blueprint.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

The blueprint configuration to use for the logger.

## Returns

[`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

- A `ConsoleLogger` instance.

## Defined in

[src/resolvers.ts:19](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/resolvers.ts#L19)
