[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [middleware/configMiddleware](../README.md) / MainHandlerMiddleware

# Function: MainHandlerMiddleware()

> **MainHandlerMiddleware**(`context`, `next`): [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to assign the main handler for the application from the provided modules.

This middleware finds a module marked as the main application entry point and assigns it as
the handler in the blueprint. Throws an error if no main handler is found.

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
MainHandlerMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:54](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/middleware/configMiddleware.ts#L54)
