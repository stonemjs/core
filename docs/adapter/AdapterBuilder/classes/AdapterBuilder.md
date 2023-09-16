[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [adapter/AdapterBuilder](../README.md) / AdapterBuilder

# Class: AdapterBuilder\<V, R\>

Class representing a generic AdapterBuilder.

This class provides a builder pattern to construct an object of type `R` based on options of type `V`.
It is intended to handle complex object creation by allowing flexible modification of options and resolving the final object.

## Type Parameters

• **V** *extends* `object`

The type of the options used to build the final object. Must be an object.

• **R**

The type of the final object that will be built.

## Implements

- [`IAdapterBuilder`](../../../definitions/interfaces/IAdapterBuilder.md)\<`V`, `R`\>

## Constructors

### new AdapterBuilder()

> `protected` **new AdapterBuilder**\<`V`, `R`\>(`options`): [`AdapterBuilder`](AdapterBuilder.md)\<`V`, `R`\>

Constructs an AdapterBuilder.

#### Parameters

• **options**: [`AdapterBuilderOptions`](../interfaces/AdapterBuilderOptions.md)\<`V`, `R`\>

The options for creating the AdapterBuilder instance, including the initial options and the resolver function.

#### Returns

[`AdapterBuilder`](AdapterBuilder.md)\<`V`, `R`\>

#### Defined in

[src/adapter/AdapterBuilder.ts:60](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L60)

## Methods

### add()

> **add**(`key`, `value`): `this`

Adds or updates a key-value pair in the options.

#### Parameters

• **key**: keyof `V`

The key in the options to be updated.

• **value**: `unknown`

The value to set for the given key.

#### Returns

`this`

This instance of AdapterBuilder for method chaining.

#### Implementation of

[`IAdapterBuilder`](../../../definitions/interfaces/IAdapterBuilder.md).[`add`](../../../definitions/interfaces/IAdapterBuilder.md#add)

#### Defined in

[src/adapter/AdapterBuilder.ts:73](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L73)

***

### build()

> **build**(): `R`

Builds the final object by using the resolver function with the current options.

#### Returns

`R`

The final object of type `R`.

#### Implementation of

[`IAdapterBuilder`](../../../definitions/interfaces/IAdapterBuilder.md).[`build`](../../../definitions/interfaces/IAdapterBuilder.md#build)

#### Defined in

[src/adapter/AdapterBuilder.ts:83](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L83)

***

### create()

> `static` **create**\<`V`, `R`\>(`options`): [`AdapterBuilder`](AdapterBuilder.md)\<`V`, `R`\>

Static method to create a new AdapterBuilder instance.

#### Type Parameters

• **V** *extends* `object`

• **R**

#### Parameters

• **options**: [`AdapterBuilderOptions`](../interfaces/AdapterBuilderOptions.md)\<`V`, `R`\>

The options for creating the AdapterBuilder instance, including the initial options and the resolver function.

#### Returns

[`AdapterBuilder`](AdapterBuilder.md)\<`V`, `R`\>

A new instance of AdapterBuilder.

#### Defined in

[src/adapter/AdapterBuilder.ts:50](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterBuilder.ts#L50)
