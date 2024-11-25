[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / IAdapterBuilder

# Interface: IAdapterBuilder\<K, R\>

AdapterBuilder Interface.

Interface representing a builder for adapters that provides methods for adding properties and building the resulting object.

## Template

R

## Type Parameters

• **K**

• **R**

## Properties

### add()

> **add**: (`key`, `value`) => `this`

#### Parameters

• **key**: keyof `K`

• **value**: `unknown`

#### Returns

`this`

#### Defined in

[src/definitions.ts:195](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L195)

***

### build()

> **build**: () => `R`

#### Returns

`R`

#### Defined in

[src/definitions.ts:196](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L196)
