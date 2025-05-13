[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [declarations.ts:569](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L569)

Represents a IBlueprintBuilder type.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [declarations.ts:576](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L576)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
