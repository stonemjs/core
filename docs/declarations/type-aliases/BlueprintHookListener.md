[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintHookListener

# Type Alias: BlueprintHookListener()\<BlueprintType, ContextType\>

> **BlueprintHookListener**\<`BlueprintType`, `ContextType`\>: (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:605](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L605)

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
