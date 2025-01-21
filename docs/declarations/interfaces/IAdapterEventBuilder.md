[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IAdapterEventBuilder

# Interface: IAdapterEventBuilder\<TValues, UResponse\>

Defined in: [declarations.ts:194](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L194)

IAdapterEventBuilder Interface.

Interface representing a builder for adapters that provides methods for adding properties and building the resulting object.

## Template

UResponse

## Type Parameters

• **TValues**

• **UResponse**

## Properties

### add()

> **add**: (`key`, `value`) => `this`

Defined in: [declarations.ts:195](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L195)

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

Defined in: [declarations.ts:196](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L196)

#### Returns

`UResponse`
