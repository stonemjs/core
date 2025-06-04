[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalConfiguration

# Type Alias: FunctionalConfiguration()\<TValues\>

> **FunctionalConfiguration**\<`TValues`\> = (`blueprint`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [declarations.ts:924](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L924)

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
