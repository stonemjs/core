[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [middleware/configMiddleware](../README.md) / RegisterProviderToOnInitHookMiddleware

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

[src/middleware/configMiddleware.ts:120](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/middleware/configMiddleware.ts#L120)
