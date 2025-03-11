[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / hasBlueprint

# Function: hasBlueprint()

> **hasBlueprint**\<`T`\>(`Class`): `boolean`

Defined in: [core/src/decorators/Metadata.ts:188](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/decorators/Metadata.ts#L188)

Check if a class has blueprint.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### Class

`T`

The class to check for metadata.

## Returns

`boolean`

True if the metadata and BLUEPRINT_KEY keys exist on the class, false otherwise.
