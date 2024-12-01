[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [middleware/configMiddleware](../README.md) / SubscriberMiddleware

# Function: SubscriberMiddleware()

> **SubscriberMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to add subscribers to the blueprint.

This middleware identifies modules marked as subscribers and adds them to the blueprint's
list of subscribers.

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
SubscriberMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:201](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/middleware/configMiddleware.ts#L201)
