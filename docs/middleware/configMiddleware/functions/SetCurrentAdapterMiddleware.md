[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetCurrentAdapterMiddleware

# Function: SetCurrentAdapterMiddleware()

> **SetCurrentAdapterMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to set the current adapter configuration in the blueprint.

This middleware looks for the preferred adapter, followed by the adapter with the matching alias,
and finally the default adapter. The selected adapter is then set in the blueprint.

## Parameters

• **context**: [`ConfigContext`](../../../definitions/interfaces/ConfigContext.md)

The configuration context containing the modules and blueprint.

• **next**: `NextPipe`\<[`ConfigContext`](../../../definitions/interfaces/ConfigContext.md), [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The next function in the pipeline to continue processing.

## Returns

[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The updated blueprint or a promise resolving to the updated blueprint.

## Example

```typescript
await SetCurrentAdapterMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:76](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/middleware/configMiddleware.ts#L76)
