[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Indexable

 \[`key`: `string`\]: `unknown`

## Properties

### app

> **app**: `Partial`\<[`AppConfig`](AppConfig.md)\>

Application-level settings, including environment, middleware, logging, and service registration.

#### Defined in

[src/options/StoneBlueprint.ts:150](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/StoneBlueprint.ts#L150)
