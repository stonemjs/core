[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [adapter/AdapterBuilder](../README.md) / AdapterBuilderOptions

# Interface: AdapterBuilderOptions\<V, R\>

AdapterBuilderOptions.

This interface defines the options used to create an AdapterBuilder instance.
It includes an optional initial options object of type `V` and a resolver function.

## Type Parameters

• **V**

The type of the options used to build the final object.

• **R**

The type of the final object that will be built.

## Properties

### options?

> `optional` **options**: `V`

The initial options used for building the object. This is optional.

#### Defined in

[src/adapter/AdapterBuilder.ts:16](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L16)

***

### resolver()

> **resolver**: (`options`) => `R`

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

• **options**: `V`

#### Returns

`R`

#### Defined in

[src/adapter/AdapterBuilder.ts:21](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L21)
