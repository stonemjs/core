[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / getMetadata

# Function: getMetadata()

Get the metadata value for a given key from a class.

## Param

The class to get the metadata from.

## Param

The key of the metadata to retrieve.

## Param

The default value to return if the metadata key is not found.

## Call Signature

> **getMetadata**\<`TClass`, `UReturn`\>(`Class`, `key`): `UReturn` \| `undefined`

Defined in: [core/src/decorators/Metadata.ts:63](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Metadata.ts#L63)

Get the metadata value for a given key from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

• **UReturn** = `unknown`

### Parameters

#### Class

`TClass`

The class to get the metadata from.

#### key

`PropertyKey`

The key of the metadata to retrieve.

### Returns

`UReturn` \| `undefined`

The metadata value or the default value if the key does not exist.

The metadata value or the default value if the key does not exist.

### Param

The class to get the metadata from.

### Param

The key of the metadata to retrieve.

### Param

The default value to return if the metadata key is not found.

## Call Signature

> **getMetadata**\<`TClass`, `UReturn`\>(`Class`, `key`, `fallback`): `UReturn`

Defined in: [core/src/decorators/Metadata.ts:73](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Metadata.ts#L73)

Get the metadata value for a given key from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

• **UReturn** = `unknown`

### Parameters

#### Class

`TClass`

The class to get the metadata from.

#### key

`PropertyKey`

The key of the metadata to retrieve.

#### fallback

`UReturn`

The default value to return if the metadata key is not found.

### Returns

`UReturn`

The metadata value or the default value if the key does not exist.

The metadata value or the default value if the key does not exist.

### Param

The class to get the metadata from.

### Param

The key of the metadata to retrieve.

### Param

The default value to return if the metadata key is not found.
