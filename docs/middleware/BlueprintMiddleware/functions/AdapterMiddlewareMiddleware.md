[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / AdapterMiddlewareMiddleware

# Function: AdapterMiddlewareMiddleware()

> **AdapterMiddlewareMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/BlueprintMiddleware.ts:324](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/middleware/BlueprintMiddleware.ts#L324)

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
