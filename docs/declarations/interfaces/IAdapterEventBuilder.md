[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IAdapterEventBuilder

# Interface: IAdapterEventBuilder\<TValues, UResponse\>

Defined in: [declarations.ts:989](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L989)

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

Defined in: [declarations.ts:992](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L992)

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

Defined in: [declarations.ts:993](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L993)

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

Defined in: [declarations.ts:991](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L991)

#### Returns

`UResponse`

***

### options

> `readonly` **options**: `TValues`

Defined in: [declarations.ts:990](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L990)
