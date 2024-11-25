[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [adapter/AdapterBuilder](../README.md) / AdapterBuilderOptions

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

[src/adapter/AdapterBuilder.ts:17](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/AdapterBuilder.ts#L17)

***

### resolver()

> **resolver**: (`options`) => `R`

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

• **options**: `V`

#### Returns

`R`

#### Defined in

[src/adapter/AdapterBuilder.ts:22](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/AdapterBuilder.ts#L22)
