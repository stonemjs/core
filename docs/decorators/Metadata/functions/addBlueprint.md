[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Metadata](../README.md) / addBlueprint

# Function: addBlueprint()

> **addBlueprint**\<`T`\>(`Class`, `context`, ...`blueprints`): `void`

Add Blueprint on a given decorator context.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **Class**: `T`

The class to get all metadata from.

• **context**: `DecoratorContext`

The decorator context where metadata is being set.

• ...**blueprints**: [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)[]

The list of blueprints.

## Returns

`void`

## Defined in

[src/decorators/Metadata.ts:107](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Metadata.ts#L107)
