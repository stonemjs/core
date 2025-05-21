[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / hasBlueprint

# Function: hasBlueprint()

> **hasBlueprint**\<`T`\>(`Class`): `boolean`

Defined in: [decorators/Metadata.ts:188](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/Metadata.ts#L188)

Check if a class has blueprint.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### Class

`T`

The class to check for metadata.

## Returns

`boolean`

True if the metadata and BLUEPRINT_KEY keys exist on the class, false otherwise.
