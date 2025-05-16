[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / ErrorHandlerMiddleware

# Function: ErrorHandlerMiddleware()

> **ErrorHandlerMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/BlueprintMiddleware.ts:170](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/middleware/BlueprintMiddleware.ts#L170)

Middleware to add error handlers to the blueprint.

This middleware identifies modules marked as error handlers and adds them to the blueprint's list
of kernel.errorhandlers.

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
ErrorHandlerMiddleware({ modules, blueprint }, next);
```
