[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / BlueprintMiddleware

# Function: BlueprintMiddleware()

> **BlueprintMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:59](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/middleware/configMiddleware.ts#L59)

Middleware to build a blueprint from provided modules and pass it to the next pipeline step.

This middleware processes each module to extract its blueprint or configuration metadata, merges
them into a single meta blueprint, and sets the resulting blueprint in the provided context.
It uses `Promise.all()` to execute the module processing concurrently for better performance.

## Parameters

### context

[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>

The configuration context containing modules and blueprint.

### next

`NextPipe`\<[`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

A promise that resolves to the updated blueprint.

## Example

```typescript
await BlueprintMiddleware({ modules, blueprint }, next);
```
