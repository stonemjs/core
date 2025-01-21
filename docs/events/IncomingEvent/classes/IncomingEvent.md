[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/IncomingEvent](../README.md) / IncomingEvent

# Class: IncomingEvent

Defined in: [events/IncomingEvent.ts:19](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L19)

Class representing an IncomingEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new IncomingEvent()

> `protected` **new IncomingEvent**(`options`): [`IncomingEvent`](IncomingEvent.md)

Defined in: [events/IncomingEvent.ts:52](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L52)

Create an IncomingEvent.

#### Parameters

##### options

[`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

[`IncomingEvent`](IncomingEvent.md)

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

## Properties

### locale

> `readonly` **locale**: `string`

Defined in: [events/IncomingEvent.ts:30](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L30)

The locale of the event.

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [events/Event.ts:27](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L27)

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

***

### source

> `readonly` **source**: [`IncomingEventSource`](../../../declarations/interfaces/IncomingEventSource.md)

Defined in: [events/IncomingEvent.ts:35](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L35)

The source of the event.

#### Overrides

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: [events/Event.ts:37](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L37)

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: [events/Event.ts:22](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L22)

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [events/Event.ts:124](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L124)

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`IncomingEvent`](IncomingEvent.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`clone`](../../Event/classes/Event.md#clone)

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

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`get`](../../Event/classes/Event.md#get)

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

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`get`](../../Event/classes/Event.md#get)

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

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

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

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

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

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`setMetadataValue`](../../Event/classes/Event.md#setmetadatavalue)

***

### create()

> `static` **create**(`options`): [`IncomingEvent`](IncomingEvent.md)

Defined in: [events/IncomingEvent.ts:43](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L43)

Create an IncomingEvent.

#### Parameters

##### options

[`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

[`IncomingEvent`](IncomingEvent.md)

A new IncomingEvent instance.

## Events

### INCOMING\_EVENT

> `static` **INCOMING\_EVENT**: `string` = `'stonejs@incoming_event'`

Defined in: [events/IncomingEvent.ts:25](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/IncomingEvent.ts#L25)

INCOMING_EVENT Event name, fires on platform message.

 IncomingEvent#INCOMING_EVENT
