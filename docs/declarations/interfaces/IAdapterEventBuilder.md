[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IAdapterEventBuilder

# Interface: IAdapterEventBuilder\<TValues, UResponse\>

Defined in: [core/src/declarations.ts:960](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L960)

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

Defined in: [core/src/declarations.ts:963](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L963)

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

Defined in: [core/src/declarations.ts:964](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L964)

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

Defined in: [core/src/declarations.ts:962](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L962)

#### Returns

`UResponse`

***

### options

> `readonly` **options**: `TValues`

Defined in: [core/src/declarations.ts:961](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L961)
