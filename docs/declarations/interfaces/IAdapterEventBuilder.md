[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IAdapterEventBuilder

# Interface: IAdapterEventBuilder\<TValues, UResponse\>

Defined in: [declarations.ts:1145](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1145)

IAdapterEventBuilder Interface.

Interface representing a builder for adapters that provides methods for adding properties and building the resulting object.

## Template

UResponse

## Type Parameters

### TValues

`TValues`

### UResponse

`UResponse`

## Properties

### add()

> **add**: (`key`, `value`) => `this`

Defined in: [declarations.ts:1148](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1148)

#### Parameters

##### key

keyof `TValues`

##### value

`TValues`\[keyof `TValues`\]

#### Returns

`this`

***

### addIf()

> **addIf**: (`key`, `value`) => `this`

Defined in: [declarations.ts:1149](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1149)

#### Parameters

##### key

keyof `TValues`

##### value

`TValues`\[keyof `TValues`\]

#### Returns

`this`

***

### build()

> **build**: () => `UResponse`

Defined in: [declarations.ts:1147](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1147)

#### Returns

`UResponse`

***

### options

> `readonly` **options**: `TValues`

Defined in: [declarations.ts:1146](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1146)
