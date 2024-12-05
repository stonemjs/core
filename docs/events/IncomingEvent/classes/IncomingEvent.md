[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [events/IncomingEvent](../README.md) / IncomingEvent

# Class: IncomingEvent

Class representing an IncomingEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new IncomingEvent()

> `protected` **new IncomingEvent**(`options`): [`IncomingEvent`](IncomingEvent.md)

Create an IncomingEvent.

#### Parameters

• **options**: [`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

[`IncomingEvent`](IncomingEvent.md)

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

#### Defined in

[src/events/IncomingEvent.ts:45](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/IncomingEvent.ts#L45)

## Properties

### locale

> `readonly` **locale**: `string`

The locale of the event.

#### Defined in

[src/events/IncomingEvent.ts:28](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/IncomingEvent.ts#L28)

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

#### Defined in

[src/events/Event.ts:27](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L27)

***

### source?

> `readonly` `optional` **source**: `object`

The source of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

#### Defined in

[src/events/Event.ts:32](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L32)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

#### Defined in

[src/events/Event.ts:37](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L37)

***

### type

> `readonly` **type**: `string`

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

#### Defined in

[src/events/Event.ts:22](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L22)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`IncomingEvent`](IncomingEvent.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`clone`](../../Event/classes/Event.md#clone)

#### Defined in

[src/events/Event.ts:79](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L79)

***

### getMetadataValue()

> **getMetadataValue**(`key`, `fallback`): `unknown`

Get data from metadata.

#### Parameters

• **key**: `string`

The key to retrieve from metadata.

• **fallback**: `unknown` = `null`

The fallback value if the key is not found.

#### Returns

`unknown`

The value associated with the key or the fallback.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

#### Defined in

[src/events/Event.ts:58](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L58)

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value`): `this`

Add data to metadata.

#### Parameters

• **key**: `string` \| `Record`\<`string`, `unknown`\>

The key or object to add to metadata.

• **value**: `unknown` = `null`

The value to associate with the key.

#### Returns

`this`

This Event instance.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`setMetadataValue`](../../Event/classes/Event.md#setmetadatavalue)

#### Defined in

[src/events/Event.ts:69](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/Event.ts#L69)

***

### create()

> `static` **create**(`options`): [`IncomingEvent`](IncomingEvent.md)

Create an IncomingEvent.

#### Parameters

• **options**: [`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

[`IncomingEvent`](IncomingEvent.md)

A new IncomingEvent instance.

#### Defined in

[src/events/IncomingEvent.ts:36](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/IncomingEvent.ts#L36)

## Events

### INCOMING\_EVENT

> `static` **INCOMING\_EVENT**: `string` = `'stonejs@incoming_event'`

INCOMING_EVENT Event name, fires on platform message.

 IncomingEvent#INCOMING_EVENT

#### Defined in

[src/events/IncomingEvent.ts:23](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/events/IncomingEvent.ts#L23)
