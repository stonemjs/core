[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [adapter/AdapterBuilder](../README.md) / AdapterBuilder

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

[src/adapter/AdapterBuilder.ts:61](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/AdapterBuilder.ts#L61)

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

[src/adapter/AdapterBuilder.ts:74](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/AdapterBuilder.ts#L74)

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

[src/adapter/AdapterBuilder.ts:84](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/AdapterBuilder.ts#L84)

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

[src/adapter/AdapterBuilder.ts:51](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/AdapterBuilder.ts#L51)
