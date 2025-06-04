[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [adapter/AdapterEventBuilder](../README.md) / AdapterEventBuilderOptions

# Interface: AdapterEventBuilderOptions\<V, R\>

Defined in: [adapter/AdapterEventBuilder.ts:14](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/AdapterEventBuilder.ts#L14)

AdapterEventBuilderOptions.

This interface defines the options used to create an AdapterEventBuilder instance.
It includes an optional initial options object of type `V` and a resolver function.

## Type Parameters

### V

`V`

The type of the options used to build the final object.

### R

`R`

The type of the final object that will be built.

## Properties

### options?

> `optional` **options**: `V`

Defined in: [adapter/AdapterEventBuilder.ts:18](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/AdapterEventBuilder.ts#L18)

The initial options used for building the object. This is optional.

***

### resolver()

> **resolver**: (`options`) => `R`

Defined in: [adapter/AdapterEventBuilder.ts:23](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/AdapterEventBuilder.ts#L23)

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

##### options

`V`

#### Returns

`R`
