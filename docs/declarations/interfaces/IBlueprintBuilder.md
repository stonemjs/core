[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IBlueprintBuilder

# Interface: IBlueprintBuilder\<BlueprintType\>

Defined in: [declarations.ts:708](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L708)

Represents a IBlueprintBuilder type.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

## Properties

### build()

> **build**: (`modules`) => `Promise`\<`BlueprintType`\>

Defined in: [declarations.ts:715](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L715)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.
