[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Metadata](../README.md) / hasBlueprint

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

[src/decorators/Metadata.ts:117](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/decorators/Metadata.ts#L117)
