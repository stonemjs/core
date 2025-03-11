[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / MiddlewareMiddleware

# Function: MiddlewareMiddleware()

> **MiddlewareMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:441](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/middleware/configMiddleware.ts#L441)

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
