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

[src/decorators/Metadata.ts:107](https://github.com/stonemjs/core/blob/c4dbb69a8c86aa6134b62f7d9cac7dabb444c749/src/decorators/Metadata.ts#L107)
