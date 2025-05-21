[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / hasMetadata

# Function: hasMetadata()

> **hasMetadata**\<`T`\>(`Class`, `key`): `boolean`

Defined in: [decorators/Metadata.ts:52](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/Metadata.ts#L52)

Check if a class has specific metadata.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

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
