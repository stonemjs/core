[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [middleware/configMiddleware](../README.md) / ListenerMiddleware

# Function: ListenerMiddleware()

> **ListenerMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to add listeners to the blueprint.

This middleware processes modules marked as listeners and associates them with the relevant
events within the blueprint. Throws an error if no event name is provided for a listener.

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
ListenerMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:174](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/middleware/configMiddleware.ts#L174)
