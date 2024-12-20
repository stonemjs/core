[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [decorators/Metadata](../README.md) / getBlueprint

# Function: getBlueprint()

> **getBlueprint**\<`T`, `R`\>(`Class`, `defaultValue`?): `R`

Get the blueprint value from a class.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **R** = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

## Parameters

• **Class**: `T`

The class to get the blueprint from.

• **defaultValue?**: `R`

The default value to return if the blueprint key is not found.

## Returns

`R`

The blueprint value or the default value if the key does not exist.

## Defined in

[src/decorators/Metadata.ts:130](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/decorators/Metadata.ts#L130)
