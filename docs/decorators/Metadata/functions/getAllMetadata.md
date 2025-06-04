[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / getAllMetadata

# Function: getAllMetadata()

Get all metadata from a class.

## Param

The class to get all metadata from.

## Param

The default value to return if no metadata is found.

## Call Signature

> **getAllMetadata**\<`TClass`, `UReturn`\>(`Class`): `undefined` \| `UReturn`

Defined in: [decorators/Metadata.ts:93](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L93)

Get all metadata from a class.

### Type Parameters

#### TClass

`TClass` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

#### UReturn

`UReturn` = `unknown`

### Parameters

#### Class

`TClass`

The class to get all metadata from.

### Returns

`undefined` \| `UReturn`

All metadata or the default value if no metadata exists.

### Param

The class to get all metadata from.

### Param

The default value to return if no metadata is found.

## Call Signature

> **getAllMetadata**\<`TClass`, `UReturn`\>(`Class`, `fallback`): `UReturn`

Defined in: [decorators/Metadata.ts:102](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L102)

Get all metadata from a class.

### Type Parameters

#### TClass

`TClass` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

#### UReturn

`UReturn` = `unknown`

### Parameters

#### Class

`TClass`

The class to get all metadata from.

#### fallback

`UReturn`

The default value to return if no metadata is found.

### Returns

`UReturn`

All metadata or the default value if no metadata exists.

### Param

The class to get all metadata from.

### Param

The default value to return if no metadata is found.
