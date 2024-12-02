[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [decorators/Metadata](../README.md) / getMetadata

# Function: getMetadata()

> **getMetadata**\<`T`, `R`\>(`Class`, `key`, `defaultValue`?): `R`

Get the metadata value for a given key from a class.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **R** = `unknown`

## Parameters

• **Class**: `T`

The class to get the metadata from.

• **key**: `PropertyKey`

The key of the metadata to retrieve.

• **defaultValue?**: `R`

The default value to return if the metadata key is not found.

## Returns

`R`

The metadata value or the default value if the key does not exist.

## Defined in

[src/decorators/Metadata.ts:38](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/decorators/Metadata.ts#L38)
