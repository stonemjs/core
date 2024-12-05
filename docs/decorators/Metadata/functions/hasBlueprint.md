[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Metadata](../README.md) / hasBlueprint

# Function: hasBlueprint()

> **hasBlueprint**\<`T`\>(`Class`): `boolean`

Check if a class has blueprint.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **Class**: `T`

The class to check for metadata.

## Returns

`boolean`

True if the metadata and BLUEPRINT_KEY keys exist on the class, false otherwise.

## Defined in

[src/decorators/Metadata.ts:119](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Metadata.ts#L119)
