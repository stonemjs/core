[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Metadata](../README.md) / hasMetadata

# Function: hasMetadata()

> **hasMetadata**\<`T`\>(`Class`, `key`): `boolean`

Check if a class has specific metadata.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **Class**: `T`

The class to check for metadata.

• **key**: `PropertyKey`

The key of the metadata to check.

## Returns

`boolean`

True if the metadata key exists on the class, false otherwise.

## Defined in

[src/decorators/Metadata.ts:24](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/decorators/Metadata.ts#L24)
