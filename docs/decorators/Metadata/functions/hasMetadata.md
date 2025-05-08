[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / hasMetadata

# Function: hasMetadata()

> **hasMetadata**\<`T`\>(`Class`, `key`): `boolean`

Defined in: [core/src/decorators/Metadata.ts:52](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Metadata.ts#L52)

Check if a class has specific metadata.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### Class

`T`

The class to check for metadata.

### key

`PropertyKey`

The key of the metadata to check.

## Returns

`boolean`

True if the metadata key exists on the class, false otherwise.
