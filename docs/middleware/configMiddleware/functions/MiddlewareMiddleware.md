[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [middleware/configMiddleware](../README.md) / MiddlewareMiddleware

# Function: MiddlewareMiddleware()

> **MiddlewareMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to add global and specific middleware to the kernel blueprint.

This middleware processes modules marked as general middleware and associates them with the
kernel's configuration in the blueprint.

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
MiddlewareMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:256](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/middleware/configMiddleware.ts#L256)
