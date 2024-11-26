[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [options/BuilderConfig](../README.md) / BuilderConfig

# Interface: BuilderConfig

Builder options.

This interface defines the configuration options for the builder.
It includes middleware for building the blueprint and the default priority for pipes.

## Properties

### defaultMiddlewarePriority

> **defaultMiddlewarePriority**: `number`

The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
This value helps to determine the order in which middleware pipes are executed.
Default value is set to 10.

#### Defined in

[src/options/BuilderConfig.ts:22](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/options/BuilderConfig.ts#L22)

***

### middleware

> **middleware**: `MixedPipe`[]

Middleware used for processing data during the blueprint construction.
The middleware array can include core pipes and any additional custom pipes.

#### Defined in

[src/options/BuilderConfig.ts:15](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/options/BuilderConfig.ts#L15)
