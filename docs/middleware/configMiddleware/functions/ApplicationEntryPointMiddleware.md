[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / ApplicationEntryPointMiddleware

# Function: ApplicationEntryPointMiddleware()

> **ApplicationEntryPointMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:88](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/middleware/configMiddleware.ts#L88)

Middleware to set the application entry point in the blueprint.

This middleware identifies the module marked as the main application entry point and sets it in the
blueprint as the handler. If no entry point is found, an error is thrown.

Note: This middleware is executed in a way to set a default event handler 
if none is provided by third-party modules.

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
ApplicationEntryPointMiddleware({ modules, blueprint }, next);
```
