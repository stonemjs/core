[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/BuilderConfig](../README.md) / BuilderConfig

# Interface: BuilderConfig

Defined in: [core/src/options/BuilderConfig.ts:11](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/BuilderConfig.ts#L11)

Builder options.

This interface defines the configuration options for the builder.
It includes middleware for building the blueprint and the default priority for pipes.

## Properties

### defaultMiddlewarePriority?

> `optional` **defaultMiddlewarePriority**: `number`

Defined in: [core/src/options/BuilderConfig.ts:23](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/BuilderConfig.ts#L23)

The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
This value helps to determine the order in which middleware pipes are executed.
Default value is set to 10.

***

### middleware

> **middleware**: `MixedPipe`\<[`ConfigContext`](../../../declarations/interfaces/ConfigContext.md)\<[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md), `any`\>, [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)\>[]

Defined in: [core/src/options/BuilderConfig.ts:16](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/options/BuilderConfig.ts#L16)

Middleware used for processing data during the blueprint construction.
The middleware array can include core pipes and any additional custom pipes.
