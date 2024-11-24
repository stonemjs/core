[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Metadata](../README.md) / getBlueprint

# Function: getBlueprint()

> **getBlueprint**\<`T`, `R`\>(`Class`, `defaultValue`?): `R`

Get the blueprint value from a class.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **R** = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

## Parameters

• **Class**: `T`

The class to get the blueprint from.

• **defaultValue?**: [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

The default value to return if the blueprint key is not found.

## Returns

`R`

The blueprint value or the default value if the key does not exist.

## Defined in

[src/decorators/Metadata.ts:128](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Metadata.ts#L128)
