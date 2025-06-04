[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / SetCurrentAdapterMiddleware

# Function: SetCurrentAdapterMiddleware()

> **SetCurrentAdapterMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/BlueprintMiddleware.ts:102](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/middleware/BlueprintMiddleware.ts#L102)

Middleware to set the current adapter configuration in the blueprint.

This middleware checks if there is only one adapter in the list, if yes return it,
otherwise it looks for the preferred adapter, followed by the adapter with the matching alias,
and finally the default adapter. The selected adapter is then set in the blueprint.

## Parameters

### context

[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline to continue processing.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint or a promise resolving to the updated blueprint.

## Example

```typescript
await SetCurrentAdapterMiddleware({ modules, blueprint }, next);
```
