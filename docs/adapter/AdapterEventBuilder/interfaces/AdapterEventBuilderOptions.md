[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/AdapterEventBuilder](../README.md) / AdapterEventBuilderOptions

# Interface: AdapterEventBuilderOptions\<V, R\>

Defined in: [core/src/adapter/AdapterEventBuilder.ts:13](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L13)

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

Defined in: [core/src/adapter/AdapterEventBuilder.ts:17](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L17)

The initial options used for building the object. This is optional.

***

### resolver()

> **resolver**: (`options`) => `R`

Defined in: [core/src/adapter/AdapterEventBuilder.ts:22](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L22)

The resolver function that takes the options and returns the final object of type `R`.

#### Parameters

##### options

`V`

#### Returns

`R`
