[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [events/Event](../README.md) / Event

# Class: `abstract` Event

Class representing an Event.

## Author

Mr. Stone <evensstone@gmail.com>

## Extended by

- [`IncomingEvent`](../../IncomingEvent/classes/IncomingEvent.md)
- [`KernelEvent`](../../KernelEvent/classes/KernelEvent.md)
- [`OutgoingResponse`](../../OutgoingResponse/classes/OutgoingResponse.md)

## Constructors

### new Event()

> **new Event**(`options`): [`Event`](Event.md)

Create an Event.

#### Parameters

• **options**: [`EventOptions`](../interfaces/EventOptions.md)

The options to create an Event.

#### Returns

[`Event`](Event.md)

#### Defined in

[src/events/Event.ts:44](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L44)

## Properties

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

The metadata associated with the event.

#### Defined in

[src/events/Event.ts:27](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L27)

***

### source?

> `readonly` `optional` **source**: `object`

The source of the event.

#### Defined in

[src/events/Event.ts:32](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L32)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The timestamp of the event creation.

#### Defined in

[src/events/Event.ts:37](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L37)

***

### type

> `readonly` **type**: `string`

The type of the event.

#### Defined in

[src/events/Event.ts:22](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L22)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`Event`](Event.md)

#### Returns

`T`

A cloned instance of the current class.

#### Defined in

[src/events/Event.ts:90](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L90)

***

### get()

> **get**\<`R`\>(`key`, `fallback`?): `undefined` \| `R`

Get data from metadata.

#### Type Parameters

• **R** = `unknown`

#### Parameters

• **key**: `string`

The key to retrieve from metadata.

• **fallback?**: `R`

The fallback value if the key is not found.

#### Returns

`undefined` \| `R`

The value associated with the key or the fallback.

#### Defined in

[src/events/Event.ts:58](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L58)

***

### getMetadataValue()

> **getMetadataValue**\<`R`\>(`key`, `fallback`?): `undefined` \| `R`

Get data from metadata.

#### Type Parameters

• **R** = `unknown`

#### Parameters

• **key**: `string`

The key to retrieve from metadata.

• **fallback?**: `R`

The fallback value if the key is not found.

#### Returns

`undefined` \| `R`

The value associated with the key or the fallback.

#### Defined in

[src/events/Event.ts:69](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L69)

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`?): `this`

Add data to metadata.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `unknown`\>

The key or object to add to metadata.

• **value?**: `unknown`

The value to associate with the key.

#### Returns

`this`

This Event instance.

#### Defined in

[src/events/Event.ts:80](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L80)
