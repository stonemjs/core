[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Metadata](../README.md) / getBlueprint

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

[src/decorators/Metadata.ts:130](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Metadata.ts#L130)
