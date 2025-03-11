[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../ConsoleLogger/classes/ConsoleLogger.md)

Defined in: [core/src/resolvers.ts:18](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/resolvers.ts#L18)

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
