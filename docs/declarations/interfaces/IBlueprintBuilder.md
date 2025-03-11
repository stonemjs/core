[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [core/src/declarations.ts:541](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L541)

Represents a IBlueprintBuilder type.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [core/src/declarations.ts:548](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L548)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
