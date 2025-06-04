[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/AdapterUtils](../README.md) / isMatchedAdapter

# Function: isMatchedAdapter()

> **isMatchedAdapter**(`blueprint`, `platform?`, `adapterAlias?`): `boolean`

Defined in: [blueprint/AdapterUtils.ts:235](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/AdapterUtils.ts#L235)

Checks if the adapter matches the given alias or platform.

This function evaluates whether the provided adapter alias or platform
matches the current blueprint context. It returns true if either is empty,
or if they match the blueprint's registered values.

## Parameters

### blueprint

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

The blueprint to check against.

### platform?

`string`

The platform to match.

### adapterAlias?

`string`

The adapter alias to match.

## Returns

`boolean`

True if the adapter matches, false otherwise.
