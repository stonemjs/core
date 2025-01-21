[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / AdapterMiddlewareMiddleware

# Function: AdapterMiddlewareMiddleware()

> **AdapterMiddlewareMiddleware**(`context`, `next`): [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) \| `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/configMiddleware.ts:284](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/middleware/configMiddleware.ts#L284)

Middleware to add adapter-specific middleware to the blueprint.

This middleware processes modules marked as adapter middleware and associates them with the
appropriate adapter configuration in the blueprint.

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
AdapterMiddlewareMiddleware({ modules, blueprint }, next);
```
