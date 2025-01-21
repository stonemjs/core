[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / SetCurrentAdapterMiddleware

# Function: SetCurrentAdapterMiddleware()

> **SetCurrentAdapterMiddleware**(`context`, `next`): [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/configMiddleware.ts:80](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/middleware/configMiddleware.ts#L80)

Middleware to set the current adapter configuration in the blueprint.

This middleware checks if there is only one adapter in the list, if yes return it,
otherwise it looks for the preferred adapter, followed by the adapter with the matching alias,
and finally the default adapter. The selected adapter is then set in the blueprint.

## Parameters

### context

[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md), [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline to continue processing.

## Returns

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint or a promise resolving to the updated blueprint.

## Example

```typescript
await SetCurrentAdapterMiddleware({ modules, blueprint }, next);
```
