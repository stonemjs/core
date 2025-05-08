[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalConfiguration

# Type Alias: FunctionalConfiguration()\<TValues\>

> **FunctionalConfiguration**\<`TValues`\>: (`blueprint`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:785](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L785)

FunctionalConfiguration Type.

Represents a function that configures the system based on the provided blueprint.

## Type Parameters

• **TValues** *extends* `object` = `any`

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)\<`TValues`\>

The blueprint to configure.

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>

A promise that resolves when the configuration is complete.
