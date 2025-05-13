[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [middleware/BlueprintMiddleware](../README.md) / AdapterMiddlewareMiddleware

# Function: AdapterMiddlewareMiddleware()

> **AdapterMiddlewareMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [middleware/BlueprintMiddleware.ts:324](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/middleware/BlueprintMiddleware.ts#L324)

Middleware to add adapter-specific middleware to the blueprint.

This middleware processes modules marked as adapter middleware and associates them with the
appropriate adapter configuration in the blueprint.

## Parameters

### context

[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `PipeClass`\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `PipeClass`\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The updated blueprint.

## Example

```typescript
AdapterMiddlewareMiddleware({ modules, blueprint }, next);
```
