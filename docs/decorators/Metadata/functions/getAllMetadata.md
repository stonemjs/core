[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / getAllMetadata

# Function: getAllMetadata()

Get all metadata from a class.

## Param

The class to get all metadata from.

## Param

The default value to return if no metadata is found.

## Call Signature

> **getAllMetadata**\<`TClass`, `UReturn`\>(`Class`): `UReturn` \| `undefined`

Defined in: [src/decorators/Metadata.ts:93](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Metadata.ts#L93)

Get all metadata from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **UReturn** = `unknown`

### Parameters

#### Class

`TClass`

The class to get all metadata from.

### Returns

`UReturn` \| `undefined`

All metadata or the default value if no metadata exists.

All metadata or the default value if no metadata exists.

### Param

The class to get all metadata from.

### Param

The default value to return if no metadata is found.

## Call Signature

> **getAllMetadata**\<`TClass`, `UReturn`\>(`Class`, `fallback`): `UReturn`

Defined in: [src/decorators/Metadata.ts:102](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Metadata.ts#L102)

Get all metadata from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **UReturn** = `unknown`

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

All metadata or the default value if no metadata exists.

### Param

The class to get all metadata from.

### Param

The default value to return if no metadata is found.
