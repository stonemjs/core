[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IAdapterBuilder

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

[src/definitions.ts:168](https://github.com/stonemjs/core/blob/c4dbb69a8c86aa6134b62f7d9cac7dabb444c749/src/definitions.ts#L168)

***

### build()

> **build**: () => `R`

#### Returns

`R`

#### Defined in

[src/definitions.ts:169](https://github.com/stonemjs/core/blob/c4dbb69a8c86aa6134b62f7d9cac7dabb444c749/src/definitions.ts#L169)
