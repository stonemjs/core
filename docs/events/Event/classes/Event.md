[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/Event](../README.md) / Event

# Class: `abstract` Event

Defined in: [events/Event.ts:18](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L18)

Class representing an Event.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`IncomingEvent`](../../IncomingEvent/classes/IncomingEvent.md)
- [`KernelEvent`](../../KernelEvent/classes/KernelEvent.md)
- [`OutgoingResponse`](../../OutgoingResponse/classes/OutgoingResponse.md)

## Constructors

### new Event()

> `protected` **new Event**(`options`): [`Event`](Event.md)

Defined in: [events/Event.ts:44](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L44)

Create an Event.

#### Parameters

##### options

[`EventOptions`](../interfaces/EventOptions.md)

The options to create an Event.

#### Returns

[`Event`](Event.md)

## Properties

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [events/Event.ts:27](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L27)

The metadata associated with the event.

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: [events/Event.ts:32](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L32)

The source of the event.

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: [events/Event.ts:37](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L37)

The timestamp of the event creation.

***

### type

> `readonly` **type**: `string`

Defined in: [events/Event.ts:22](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L22)

The type of the event.

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [events/Event.ts:124](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L124)

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`Event`](Event.md)

#### Returns

`T`

A cloned instance of the current class.

***

### get()

Get data from metadata.

#### Param

The key to retrieve from metadata.

#### Param

The fallback value if the key is not found.

#### Call Signature

> **get**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [events/Event.ts:57](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L57)

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [events/Event.ts:66](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L66)

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

***

### getMetadataValue()

Get data from metadata.

#### Param

The key to retrieve from metadata.

#### Param

The fallback value if the key is not found.

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`): `undefined` \| `TReturn`

Defined in: [events/Event.ts:85](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L85)

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [events/Event.ts:94](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L94)

Get data from metadata.

##### Type Parameters

• **TReturn** = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

###### fallback

`TReturn`

The fallback value if the key is not found.

##### Returns

`TReturn`

The value associated with the key or the fallback.

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`?): `this`

Defined in: [events/Event.ts:114](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L114)

Add data to metadata.

#### Parameters

##### key

The key or object to add to metadata.

`string` | `Record`\<`string`, `unknown`\>

##### value?

`unknown`

The value to associate with the key.

#### Returns

`this`

This Event instance.
