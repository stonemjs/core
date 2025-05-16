[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IAdapterEventBuilder

# Interface: IAdapterEventBuilder\<TValues, UResponse\>

Defined in: [declarations.ts:1140](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1140)

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

Defined in: [declarations.ts:1143](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1143)

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

Defined in: [declarations.ts:1144](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1144)

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

Defined in: [declarations.ts:1142](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1142)

#### Returns

`UResponse`

***

### options

> `readonly` **options**: `TValues`

Defined in: [declarations.ts:1141](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1141)
