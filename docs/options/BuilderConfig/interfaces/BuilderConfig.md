[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/BuilderConfig](../README.md) / BuilderConfig

# Interface: BuilderConfig

Defined in: [options/BuilderConfig.ts:10](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/BuilderConfig.ts#L10)

Builder options.

This interface defines the configuration options for the builder.
It includes middleware for building the blueprint and the default priority for pipes.

## Properties

### defaultMiddlewarePriority?

> `optional` **defaultMiddlewarePriority**: `number`

Defined in: [options/BuilderConfig.ts:22](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/BuilderConfig.ts#L22)

The default priority for pipes, used when a specific pipe does not have an explicitly set priority.
This value helps to determine the order in which middleware pipes are executed.
Default value is set to 10.

***

### middleware

> **middleware**: `MixedPipe`[]

Defined in: [options/BuilderConfig.ts:15](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/BuilderConfig.ts#L15)

Middleware used for processing data during the blueprint construction.
The middleware array can include core pipes and any additional custom pipes.
