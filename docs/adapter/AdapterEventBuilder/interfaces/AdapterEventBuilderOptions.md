[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/AdapterEventBuilder](../README.md) / AdapterEventBuilderOptions

# Interface: AdapterEventBuilderOptions\<V, R\>

Defined in: [core/src/adapter/AdapterEventBuilder.ts:14](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/adapter/AdapterEventBuilder.ts#L14)

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

Defined in: [core/src/adapter/AdapterEventBuilder.ts:18](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/adapter/AdapterEventBuilder.ts#L18)

The initial options used for building the object. This is optional.

***

### resolver()

> **resolver**: (`options`) => `R`

Defined in: [core/src/adapter/AdapterEventBuilder.ts:23](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/adapter/AdapterEventBuilder.ts#L23)

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

##### options

`V`

#### Returns

`R`
