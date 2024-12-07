[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [utils](../README.md) / resolveCurrentAdapter

# Function: resolveCurrentAdapter()

> **resolveCurrentAdapter**(`blueprint`, `platform`?): `void`

Resolves and sets the current adapter configuration.

If a `platform` is provided, it selects the corresponding adapter from the blueprint's
adapter list. If no `platform` is provided, it infers the adapter by matching the
platform of the existing adapter configuration.

The selected adapter is merged with the existing adapter configuration and updated
in the blueprint.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

The blueprint object containing the adapter configurations.

• **platform?**: `string`

Optional platform identifier to explicitly select the adapter.

## Returns

`void`

## Defined in

[src/utils.ts:93](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/utils.ts#L93)
