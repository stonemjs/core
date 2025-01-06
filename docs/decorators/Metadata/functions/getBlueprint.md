[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / getBlueprint

# Function: getBlueprint()

Get the blueprint value from a class.

## Param

The class to get the blueprint from.

## Param

The default value to return if the blueprint key is not found.

## Call Signature

> **getBlueprint**\<`TClass`, `UReturn`\>(`Class`): `UReturn` \| `undefined`

Defined in: [src/decorators/Metadata.ts:198](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/decorators/Metadata.ts#L198)

Get the blueprint value from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **UReturn** = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

### Parameters

#### Class

`TClass`

The class to get the blueprint from.

### Returns

`UReturn` \| `undefined`

The blueprint value or the default value if the key does not exist.

The blueprint value or the default value if the key does not exist.

### Param

The class to get the blueprint from.

### Param

The default value to return if the blueprint key is not found.

## Call Signature

> **getBlueprint**\<`TClass`, `UReturn`\>(`Class`, `fallback`): `UReturn`

Defined in: [src/decorators/Metadata.ts:207](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/decorators/Metadata.ts#L207)

Get the blueprint value from a class.

### Type Parameters

• **TClass** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md)

• **UReturn** = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

### Parameters

#### Class

`TClass`

The class to get the blueprint from.

#### fallback

`UReturn`

The default value to return if the blueprint key is not found.

### Returns

`UReturn`

The blueprint value or the default value if the key does not exist.

The blueprint value or the default value if the key does not exist.

### Param

The class to get the blueprint from.

### Param

The default value to return if the blueprint key is not found.
