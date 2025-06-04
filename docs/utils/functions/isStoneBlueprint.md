[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [utils](../README.md) / isStoneBlueprint

# Function: isStoneBlueprint()

> **isStoneBlueprint**\<`T`\>(`value`): `value is T`

Defined in: [utils.ts:48](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/utils.ts#L48)

Check if the provided value is a Stone blueprint.
This function checks if the value is an object and contains the required `stone` property.

## Type Parameters

### T

`T` *extends* [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`any`, `any`\>

## Parameters

### value

`any`

The value to check.

## Returns

`value is T`

`true` if the value is a Stone blueprint, otherwise `false`.
