[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineLogger

# Function: defineLogger()

> **defineLogger**(`module`, `isFactory?`, `options?`): `Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [BlueprintUtils.ts:351](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L351)

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

`Partial`\<[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

The StoneBlueprint.

## Param

The Logger module.

## Param

Indicates if the Logger is a factory function. e.g. `true` for a factory function, `false` for a class.

## Param

The options for the Logger.
