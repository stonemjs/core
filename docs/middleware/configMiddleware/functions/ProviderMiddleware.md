[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [middleware/configMiddleware](../README.md) / ProviderMiddleware

# Function: ProviderMiddleware()

> **ProviderMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to add service providers to the blueprint.

This middleware identifies modules marked as service providers and adds them to the blueprint's
list of providers.

## Parameters

• **context**: [`ConfigContext`](../../../definitions/interfaces/ConfigContext.md)

The configuration context containing modules and blueprint.

• **next**: `NextPipe`\<[`ConfigContext`](../../../definitions/interfaces/ConfigContext.md), [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
ProviderMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:99](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/middleware/configMiddleware.ts#L99)
