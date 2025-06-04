[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [declarations.ts:708](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L708)

Represents a IBlueprintBuilder type.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [declarations.ts:715](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L715)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
