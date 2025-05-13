[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / BlueprintHookType

# Interface: BlueprintHookType\<BlueprintType, ContextType\>

Defined in: [declarations.ts:604](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L604)

Blueprint Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

### ContextType

`ContextType` *extends* [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\>

## Properties

### onBlueprintMiddlewareProcessed?

> `optional` **onBlueprintMiddlewareProcessed**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>[]

Defined in: [declarations.ts:611](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L611)

***

### onBlueprintPrepared?

> `optional` **onBlueprintPrepared**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>[]

Defined in: [declarations.ts:609](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L609)

***

### onPreparingBlueprint?

> `optional` **onPreparingBlueprint**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>[]

Defined in: [declarations.ts:608](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L608)

***

### onProcessingBlueprintMiddleware?

> `optional` **onProcessingBlueprintMiddleware**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>[]

Defined in: [declarations.ts:610](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L610)
