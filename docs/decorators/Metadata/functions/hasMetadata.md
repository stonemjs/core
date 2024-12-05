[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Metadata](../README.md) / hasMetadata

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

[src/decorators/Metadata.ts:26](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Metadata.ts#L26)
