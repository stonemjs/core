[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [middleware/configMiddleware](../README.md) / RegisterProviderToOnInitHookMiddleware

# Function: RegisterProviderToOnInitHookMiddleware()

> **RegisterProviderToOnInitHookMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to register service providers to the `onInit` hook of the current adapter.

This middleware filters modules to identify service providers that implement the `onInit` hook,
and adds them to the `onInit` lifecycle event of the current adapter.

## Parameters

• **context**: [`ConfigContext`](../../../definitions/interfaces/ConfigContext.md)

The configuration context containing the modules and blueprint.

• **next**: `NextPipe`\<[`ConfigContext`](../../../definitions/interfaces/ConfigContext.md), [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The next function in the middleware pipeline.

## Returns

[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

- Returns the updated blueprint or a promise resolving to it.

## Example

```typescript
await RegisterProviderToOnInitHookMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:119](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/middleware/configMiddleware.ts#L119)
