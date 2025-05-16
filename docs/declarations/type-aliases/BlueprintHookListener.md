[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / BlueprintHookListener

# Type Alias: BlueprintHookListener()\<BlueprintType, ContextType\>

> **BlueprintHookListener**\<`BlueprintType`, `ContextType`\> = (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [declarations.ts:768](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L768)

BlueprintHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](IBlueprint.md) = [`IBlueprint`](IBlueprint.md)

### ContextType

`ContextType` *extends* [`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](../interfaces/BlueprintContext.md)\<`BlueprintType`\>

## Parameters

### context

`ContextType`

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
