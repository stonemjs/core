[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [middleware/configMiddleware](../README.md) / AdapterMiddlewareMiddleware

# Function: AdapterMiddlewareMiddleware()

> **AdapterMiddlewareMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to add adapter-specific middleware to the blueprint.

This middleware processes modules marked as adapter middleware and associates them with the
appropriate adapter configuration in the blueprint.

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
AdapterMiddlewareMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:222](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/middleware/configMiddleware.ts#L222)
