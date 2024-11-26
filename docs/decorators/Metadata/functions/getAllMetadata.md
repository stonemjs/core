[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Metadata](../README.md) / getAllMetadata

# Function: getAllMetadata()

> **getAllMetadata**\<`T`, `R`\>(`Class`, `defaultValue`): `R`

Get all metadata from a class.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **R** = `unknown`

## Parameters

• **Class**: `T`

The class to get all metadata from.

• **defaultValue**: `R`

The default value to return if no metadata is found.

## Returns

`R`

All metadata or the default value if no metadata exists.

## Defined in

[src/decorators/Metadata.ts:47](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Metadata.ts#L47)
