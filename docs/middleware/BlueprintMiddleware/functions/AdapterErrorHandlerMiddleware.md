[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / AdapterErrorHandlerMiddleware

# Function: AdapterErrorHandlerMiddleware()

> **AdapterErrorHandlerMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/BlueprintMiddleware.ts:206](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/middleware/BlueprintMiddleware.ts#L206)

Middleware to add adapter error handlers to the blueprint.

This middleware identifies modules marked as adapter error handlers and adds them to the blueprint's list
of adapter.errorhandlers.

Note: User defined error handlers take precedence over built-in and third-party error handlers.
So the users can override the default error handlers.

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
AdapterErrorHandlerMiddleware({ modules, blueprint }, next);
```
