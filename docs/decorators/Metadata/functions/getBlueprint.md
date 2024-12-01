[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Metadata](../README.md) / getBlueprint

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

[src/decorators/Metadata.ts:128](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/decorators/Metadata.ts#L128)
