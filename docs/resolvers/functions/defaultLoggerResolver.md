[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [resolvers](../README.md) / defaultLoggerResolver

# Function: defaultLoggerResolver()

> **defaultLoggerResolver**(`blueprint`): [`ConsoleLogger`](../../logger/ConsoleLogger/classes/ConsoleLogger.md)

Defined in: [resolvers.ts:18](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/resolvers.ts#L18)

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
