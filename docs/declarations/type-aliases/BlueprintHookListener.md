[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintHookListener

# Type Alias: BlueprintHookListener()\<BlueprintType, ContextType\>

> **BlueprintHookListener**\<`BlueprintType`, `ContextType`\>: (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:634](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L634)

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
