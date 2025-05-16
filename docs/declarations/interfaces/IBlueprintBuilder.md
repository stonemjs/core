[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [declarations.ts:703](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L703)

Represents a IBlueprintBuilder type.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [declarations.ts:710](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L710)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
