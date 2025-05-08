[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [core/src/declarations.ts:569](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L569)

Represents a IBlueprintBuilder type.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [core/src/declarations.ts:576](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L576)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
