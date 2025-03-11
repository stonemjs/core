[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalConfiguration

# Type Alias: FunctionalConfiguration()\<TValues\>

> **FunctionalConfiguration**\<`TValues`\>: (`blueprint`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:756](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L756)

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
