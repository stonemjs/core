[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / AdapterErrorHandlerMiddleware

# Function: AdapterErrorHandlerMiddleware()

> **AdapterErrorHandlerMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:268](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/middleware/configMiddleware.ts#L268)

Middleware to add adapter error handlers to the blueprint.

This middleware identifies modules marked as adapter error handlers and adds them to the blueprint's list
of adapter.errorhandlers.

Note: User defined error handlers take precedence over built-in and third-party error handlers.
So the users can override the default error handlers.

## Parameters

### context

[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
AdapterErrorHandlerMiddleware({ modules, blueprint }, next);
```
