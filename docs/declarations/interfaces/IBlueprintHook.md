[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IBlueprintHook

# Interface: IBlueprintHook\<BlueprintType, ContextType\>

Defined in: [core/src/declarations.ts:591](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L591)

Blueprint Hook interface.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

• **ContextType** *extends* [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\>

## Properties

### onBlueprintMiddlewareProcessed?

> `optional` **onBlueprintMiddlewareProcessed**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>

Defined in: [core/src/declarations.ts:598](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L598)

***

### onBlueprintPrepared?

> `optional` **onBlueprintPrepared**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [core/src/declarations.ts:596](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L596)

***

### onPreparingBlueprint?

> `optional` **onPreparingBlueprint**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>

Defined in: [core/src/declarations.ts:595](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L595)

***

### onProcessingBlueprintMiddleware?

> `optional` **onProcessingBlueprintMiddleware**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>

Defined in: [core/src/declarations.ts:597](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L597)
