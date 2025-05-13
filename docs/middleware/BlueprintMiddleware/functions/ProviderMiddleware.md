[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / ProviderMiddleware

# Function: ProviderMiddleware()

> **ProviderMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/BlueprintMiddleware.ts:139](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/middleware/BlueprintMiddleware.ts#L139)

Middleware to add service providers to the blueprint.

This middleware identifies modules marked as service providers and adds them to the blueprint's
list of providers.

## Parameters

### context

[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
ProviderMiddleware({ modules, blueprint }, next);
```
