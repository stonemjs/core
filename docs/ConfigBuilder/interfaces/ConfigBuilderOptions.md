[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [ConfigBuilder](../README.md) / ConfigBuilderOptions

# Interface: ConfigBuilderOptions\<BlueprintType, ContextType\>

Defined in: [core/src/ConfigBuilder.ts:11](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L11)

ConfigBuilderOptions.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

• **ContextType** *extends* [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\> = [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\>

## Properties

### defaultMiddlewarePriority?

> `optional` **defaultMiddlewarePriority**: `number`

Defined in: [core/src/ConfigBuilder.ts:15](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L15)

***

### middleware

> **middleware**: `MixedPipe`\<`ContextType`, `BlueprintType`\>[]

Defined in: [core/src/ConfigBuilder.ts:16](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L16)
