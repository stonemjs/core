[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/BlueprintMiddleware](../README.md) / MiddlewareMiddleware

# Function: MiddlewareMiddleware()

> **MiddlewareMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/BlueprintMiddleware.ts:366](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/middleware/BlueprintMiddleware.ts#L366)

Middleware to add global and specific middleware to the kernel blueprint.

This middleware processes modules marked as general middleware and associates them with the
kernel's configuration in the blueprint.

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
MiddlewareMiddleware({ modules, blueprint }, next);
```
