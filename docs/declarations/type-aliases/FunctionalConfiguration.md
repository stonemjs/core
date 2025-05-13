[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalConfiguration

# Type Alias: FunctionalConfiguration()\<TValues\>

> **FunctionalConfiguration**\<`TValues`\> = (`blueprint`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [declarations.ts:785](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L785)

FunctionalConfiguration Type.

Represents a function that configures the system based on the provided blueprint.

## Type Parameters

### TValues

`TValues` *extends* `object` = `any`

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)\<`TValues`\>

The blueprint to configure.

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>

A promise that resolves when the configuration is complete.
