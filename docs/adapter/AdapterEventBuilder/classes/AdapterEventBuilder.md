[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/AdapterEventBuilder](../README.md) / AdapterEventBuilder

# Class: AdapterEventBuilder\<V, R\>

Defined in: [core/src/adapter/AdapterEventBuilder.ts:34](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L34)

Class representing a generic AdapterEventBuilder.

This class provides a builder pattern to construct an object of type `R` based on options of type `V`.
It is intended to handle complex object creation by allowing flexible modification of options and resolving the final object.

## Type Parameters

• **V** *extends* `object`

The type of the options used to build the final object. Must be an object.

• **R**

The type of the final object that will be built.

## Implements

- [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<`V`, `R`\>

## Constructors

### new AdapterEventBuilder()

> `protected` **new AdapterEventBuilder**\<`V`, `R`\>(`options`): [`AdapterEventBuilder`](AdapterEventBuilder.md)\<`V`, `R`\>

Defined in: [core/src/adapter/AdapterEventBuilder.ts:61](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L61)

Constructs an AdapterEventBuilder.

#### Parameters

##### options

[`AdapterEventBuilderOptions`](../interfaces/AdapterEventBuilderOptions.md)\<`V`, `R`\>

The options for creating the AdapterEventBuilder instance, including the initial options and the resolver function.

#### Returns

[`AdapterEventBuilder`](AdapterEventBuilder.md)\<`V`, `R`\>

## Methods

### add()

> **add**(`key`, `value`): `this`

Defined in: [core/src/adapter/AdapterEventBuilder.ts:75](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L75)

Adds or updates a key-value pair in the options.

#### Parameters

##### key

keyof `V`

The key in the options to be updated.

##### value

`V`\[keyof `V`\]

The value to set for the given key.

#### Returns

`this`

This instance of AdapterEventBuilder for method chaining.

#### Implementation of

[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md).[`add`](../../../declarations/interfaces/IAdapterEventBuilder.md#add)

***

### build()

> **build**(): `R`

Defined in: [core/src/adapter/AdapterEventBuilder.ts:85](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L85)

Builds the final object by using the resolver function with the current options.

#### Returns

`R`

The final object of type `R`.

#### Implementation of

[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md).[`build`](../../../declarations/interfaces/IAdapterEventBuilder.md#build)

***

### create()

> `static` **create**\<`V`, `R`\>(`options`): [`AdapterEventBuilder`](AdapterEventBuilder.md)\<`V`, `R`\>

Defined in: [core/src/adapter/AdapterEventBuilder.ts:51](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/AdapterEventBuilder.ts#L51)

Static method to create a new AdapterEventBuilder instance.

#### Type Parameters

• **V** *extends* `object`

• **R**

#### Parameters

##### options

[`AdapterEventBuilderOptions`](../interfaces/AdapterEventBuilderOptions.md)\<`V`, `R`\>

The options for creating the AdapterEventBuilder instance, including the initial options and the resolver function.

#### Returns

[`AdapterEventBuilder`](AdapterEventBuilder.md)\<`V`, `R`\>

A new instance of AdapterEventBuilder.
