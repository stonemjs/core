[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineLogger

# Function: defineLogger()

> **defineLogger**(`module`, `isFactory`?, `options`?): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: core/src/BlueprintUtils.ts:351

Utility function to define a logger.

## Parameters

### module

The Logger module.

[`ILoggerClass`](../../declarations/type-aliases/ILoggerClass.md) | [`FactoryLogger`](../../declarations/type-aliases/FactoryLogger.md)

### isFactory?

`false`

Indicates if the Logger is a factory function. e.g. `false` for a class.

### options?

`object` & `Record`\<`string`, `unknown`\>

The options for the Logger.

## Returns

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

The StoneBlueprint.

The StoneBlueprint.

## Param

The Logger module.

## Param

Indicates if the Logger is a factory function. e.g. `true` for a factory function, `false` for a class.

## Param

The options for the Logger.
