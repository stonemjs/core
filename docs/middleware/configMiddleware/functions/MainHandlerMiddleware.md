[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / MainHandlerMiddleware

# Function: MainHandlerMiddleware()

> **MainHandlerMiddleware**(`context`, `next`): [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/configMiddleware.ts:57](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/middleware/configMiddleware.ts#L57)

Middleware to assign the main handler for the application from the provided modules.

This middleware finds a module marked as the main application entry point and assigns it as
the handler in the blueprint. Throws an error if no main handler is found.

## Parameters

### context

[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md), [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
MainHandlerMiddleware({ modules, blueprint }, next);
```
