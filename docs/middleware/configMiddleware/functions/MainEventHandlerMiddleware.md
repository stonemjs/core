[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / MainEventHandlerMiddleware

# Function: MainEventHandlerMiddleware()

> **MainEventHandlerMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:140](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/middleware/configMiddleware.ts#L140)

Middleware to set the main event handler in the blueprint.

This middleware identifies the module marked as the main application and sets it in the
blueprint as the main event handler. If no entry point is found, an error is thrown.

Note: This middleware is executed in a way to set a default event handler
if none is provided by third-party modules.

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
MainEventHandlerMiddleware({ modules, blueprint }, next);
```
