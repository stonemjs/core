[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintHook

# Interface: IBlueprintHook\<BlueprintType, ContextType\>

Defined in: [declarations.ts:619](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L619)

Blueprint Hook interface.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

### ContextType

`ContextType` *extends* [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\>

## Properties

### onBlueprintMiddlewareProcessed?

> `optional` **onBlueprintMiddlewareProcessed**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>

Defined in: [declarations.ts:626](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L626)

***

### onBlueprintPrepared?

> `optional` **onBlueprintPrepared**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [declarations.ts:624](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L624)

***

### onPreparingBlueprint?

> `optional` **onPreparingBlueprint**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [declarations.ts:623](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L623)

***

### onProcessingBlueprintMiddleware?

> `optional` **onProcessingBlueprintMiddleware**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>

Defined in: [declarations.ts:625](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L625)
