[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [adapter/AdapterEventBuilder](../README.md) / AdapterEventBuilderOptions

# Interface: AdapterEventBuilderOptions\<V, R\>

AdapterEventBuilderOptions.

This interface defines the options used to create an AdapterEventBuilder instance.
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

src/adapter/AdapterEventBuilder.ts:17

***

### resolver()

> **resolver**: (`options`) => `R`

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

• **options**: `V`

#### Returns

`R`

#### Defined in

src/adapter/AdapterEventBuilder.ts:22
