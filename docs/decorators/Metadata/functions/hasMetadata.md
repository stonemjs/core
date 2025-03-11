[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / hasMetadata

# Function: hasMetadata()

> **hasMetadata**\<`T`\>(`Class`, `key`): `boolean`

Defined in: [core/src/decorators/Metadata.ts:52](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/decorators/Metadata.ts#L52)

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
