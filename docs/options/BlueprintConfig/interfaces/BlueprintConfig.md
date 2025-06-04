[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/BlueprintConfig](../README.md) / BlueprintConfig

# Interface: BlueprintConfig\<BlueprintType, ContextType\>

Defined in: [options/BlueprintConfig.ts:11](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/BlueprintConfig.ts#L11)

Blueprint options.

This interface defines the configuration options for the blueprint builder.
It includes middleware for building the blueprint and the default priority for pipes.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

### ContextType

`ContextType` *extends* [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\>

## Properties

### defaultMiddlewarePriority?

> `optional` **defaultMiddlewarePriority**: `number`

Defined in: [options/BlueprintConfig.ts:26](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/BlueprintConfig.ts#L26)

The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
This value helps to determine the order in which middleware pipes are executed.
Default value is set to 10.

***

### middleware

> **middleware**: `MixedPipe`\<`ContextType`, `BlueprintType`\>[]

Defined in: [options/BlueprintConfig.ts:19](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/BlueprintConfig.ts#L19)

Middleware used for processing data during the blueprint construction.
The middleware array can include core pipes and any additional custom pipes.
