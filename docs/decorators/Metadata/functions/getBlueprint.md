[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / getBlueprint

# Function: getBlueprint()

Get the blueprint value from a class.

## Param

The class to get the blueprint from.

## Param

The default value to return if the blueprint key is not found.

## Call Signature

> **getBlueprint**\<`TClass`, `UReturn`\>(`Class`): `undefined` \| `UReturn`

Defined in: [decorators/Metadata.ts:198](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L198)

Get the blueprint value from a class.

### Type Parameters

#### TClass

`TClass` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

#### UReturn

`UReturn` = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

### Parameters

#### Class

`TClass`

The class to get the blueprint from.

### Returns

`undefined` \| `UReturn`

The blueprint value or the default value if the key does not exist.

### Param

The class to get the blueprint from.

### Param

The default value to return if the blueprint key is not found.

## Call Signature

> **getBlueprint**\<`TClass`, `UReturn`\>(`Class`, `fallback`): `UReturn`

Defined in: [decorators/Metadata.ts:207](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L207)

Get the blueprint value from a class.

### Type Parameters

#### TClass

`TClass` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

#### UReturn

`UReturn` = [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

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

### Param

The class to get the blueprint from.

### Param

The default value to return if the blueprint key is not found.
