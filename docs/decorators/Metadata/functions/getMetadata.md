[**Core Documentation v0.0.36**](../../../README.md)

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

Defined in: [decorators/Metadata.ts:63](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Metadata.ts#L63)

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

Defined in: [decorators/Metadata.ts:73](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Metadata.ts#L73)

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
