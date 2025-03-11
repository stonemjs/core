[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/BuilderConfig](../README.md) / BuilderConfig

# Interface: BuilderConfig\<BlueprintType, ContextType\>

Defined in: [core/src/options/BuilderConfig.ts:11](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/BuilderConfig.ts#L11)

Builder options.

This interface defines the configuration options for the builder.
It includes middleware for building the blueprint and the default priority for pipes.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

• **ContextType** *extends* [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\>

## Properties

### defaultMiddlewarePriority?

> `optional` **defaultMiddlewarePriority**: `number`

Defined in: [core/src/options/BuilderConfig.ts:26](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/BuilderConfig.ts#L26)

The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
This value helps to determine the order in which middleware pipes are executed.
Default value is set to 10.

***

### middleware

> **middleware**: `MixedPipe`\<`ContextType`, `BlueprintType`\>[]

Defined in: [core/src/options/BuilderConfig.ts:19](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/options/BuilderConfig.ts#L19)

Middleware used for processing data during the blueprint construction.
The middleware array can include core pipes and any additional custom pipes.
