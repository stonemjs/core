[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [middleware/configMiddleware](../README.md) / BlueprintMiddleware

# Function: BlueprintMiddleware()

> **BlueprintMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

Middleware to build a blueprint from provided modules and pass it to the next pipeline step.

This middleware processes each module to extract its blueprint or configuration metadata, merges
them into a single meta blueprint, and sets the resulting blueprint in the provided context.
It uses `Promise.all()` to execute the module processing concurrently for better performance.

## Parameters

• **context**: [`ConfigContext`](../../../definitions/interfaces/ConfigContext.md)

The configuration context containing modules and blueprint.

• **next**: `NextPipe`\<[`ConfigContext`](../../../definitions/interfaces/ConfigContext.md), [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

The next function in the pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)\>

A promise that resolves to the updated blueprint.

## Example

```typescript
await BlueprintMiddleware({ modules, blueprint }, next);
```

## Defined in

[src/middleware/configMiddleware.ts:29](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/middleware/configMiddleware.ts#L29)
