[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `Partial`\<[`AppConfig`](AppConfig.md)\>

Application-level settings, including environment, middleware, logging, and service registration.

#### Defined in

[src/options/StoneBlueprint.ts:143](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/options/StoneBlueprint.ts#L143)
