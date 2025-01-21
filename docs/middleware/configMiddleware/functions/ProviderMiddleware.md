[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / ProviderMiddleware

# Function: ProviderMiddleware()

> **ProviderMiddleware**(`context`, `next`): [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/configMiddleware.ts:109](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/middleware/configMiddleware.ts#L109)

Middleware to add service providers to the blueprint.

This middleware identifies modules marked as service providers and adds them to the blueprint's
list of providers.

## Parameters

### context

[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md), [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
ProviderMiddleware({ modules, blueprint }, next);
```
