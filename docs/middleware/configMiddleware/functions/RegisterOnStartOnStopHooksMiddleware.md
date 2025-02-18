[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [middleware/configMiddleware](../README.md) / RegisterOnStartOnStopHooksMiddleware

# Function: RegisterOnStartOnStopHooksMiddleware()

> **RegisterOnStartOnStopHooksMiddleware**(`context`, `next`): `Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

Defined in: [core/src/middleware/configMiddleware.ts:194](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/middleware/configMiddleware.ts#L194)

Middleware to register service providers to the `onStart` hook of the current adapter.

This middleware filters modules to identify service providers that implement the `onStart` hook,
and adds them to the `onStart` lifecycle event of the current adapter.

## Parameters

### context

[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>

The configuration context containing the modules and blueprint.

### next

`NextPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), [`ClassType`](../../../declarations/type-aliases/ClassType.md)\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

The next function in the middleware pipeline.

## Returns

`Promise`\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>

- Returns the updated blueprint or a promise resolving to it.

## Example

```typescript
await RegisterProviderOnStartOnStopHooksMiddleware({ modules, blueprint }, next);
```
