[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintHookListener

# Type Alias: BlueprintHookListener()\<BlueprintType, ContextType\>

> **BlueprintHookListener**\<`BlueprintType`, `ContextType`\>: (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:606](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L606)

BlueprintHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](IBlueprint.md) = [`IBlueprint`](IBlueprint.md)

• **ContextType** *extends* [`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\>

## Parameters

### context

`ContextType`

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
