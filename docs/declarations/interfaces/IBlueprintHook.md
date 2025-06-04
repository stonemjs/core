[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintHook

# Interface: IBlueprintHook\<BlueprintType, ContextType\>

Defined in: [declarations.ts:758](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L758)

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

Defined in: [declarations.ts:765](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L765)

***

### onBlueprintPrepared?

> `optional` **onBlueprintPrepared**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [declarations.ts:763](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L763)

***

### onPreparingBlueprint?

> `optional` **onPreparingBlueprint**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [declarations.ts:762](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L762)

***

### onProcessingBlueprintMiddleware?

> `optional` **onProcessingBlueprintMiddleware**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>

Defined in: [declarations.ts:764](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L764)
