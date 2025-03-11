[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintHookType

# Interface: BlueprintHookType\<BlueprintType, ContextType\>

Defined in: [core/src/declarations.ts:576](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L576)

Blueprint Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

• **ContextType** *extends* [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](BlueprintContext.md)\<`BlueprintType`\>

## Properties

### onBlueprintMiddlewareProcessed?

> `optional` **onBlueprintMiddlewareProcessed**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>[]

Defined in: [core/src/declarations.ts:583](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L583)

***

### onBlueprintPrepared?

> `optional` **onBlueprintPrepared**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>[]

Defined in: [core/src/declarations.ts:581](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L581)

***

### onPreparingBlueprint?

> `optional` **onPreparingBlueprint**: [`BlueprintHookListener`](../type-aliases/BlueprintHookListener.md)\<`BlueprintType`, `ContextType`\>[]

Defined in: [core/src/declarations.ts:580](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L580)

***

### onProcessingBlueprintMiddleware?

> `optional` **onProcessingBlueprintMiddleware**: `PipelineHookListener`\<`ContextType`, `BlueprintType`, `any`[]\>[]

Defined in: [core/src/declarations.ts:582](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L582)
