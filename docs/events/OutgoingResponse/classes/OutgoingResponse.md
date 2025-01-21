[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/OutgoingResponse](../README.md) / OutgoingResponse

# Class: OutgoingResponse

Defined in: [events/OutgoingResponse.ts:19](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L19)

Class representing an OutgoingResponse.

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new OutgoingResponse()

> `protected` **new OutgoingResponse**(`options`): [`OutgoingResponse`](OutgoingResponse.md)

Defined in: [events/OutgoingResponse.ts:62](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L62)

Create an OutgoingResponse.

#### Parameters

##### options

[`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md)

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: [events/OutgoingResponse.ts:35](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L35)

The content of the response.

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: [events/OutgoingResponse.ts:40](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L40)

The status code of the response.

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: [events/OutgoingResponse.ts:45](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L45)

The status message of the response.

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [events/Event.ts:27](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L27)

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: [events/OutgoingResponse.ts:30](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L30)

The original content of the response.

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: [events/Event.ts:32](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L32)

The source of the event.

#### Inherited from

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

## Accessors

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: [events/OutgoingResponse.ts:101](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L101)

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: [events/OutgoingResponse.ts:83](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L83)

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: [events/OutgoingResponse.ts:92](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L92)

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [events/Event.ts:124](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/Event.ts#L124)

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`OutgoingResponse`](OutgoingResponse.md)

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

### prepare()

> **prepare**(`_event`, `_container`): [`OutgoingResponse`](OutgoingResponse.md) \| `Promise`\<[`OutgoingResponse`](OutgoingResponse.md)\>

Defined in: [events/OutgoingResponse.ts:112](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L112)

Prepare response before sending it.

#### Parameters

##### \_event

[`IncomingEvent`](../../IncomingEvent/classes/IncomingEvent.md)

The incoming event associated with this response.

##### \_container

`Container`

The container.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md) \| `Promise`\<[`OutgoingResponse`](OutgoingResponse.md)\>

This OutgoingResponse instance.

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

> `static` **create**(`options`): [`OutgoingResponse`](OutgoingResponse.md)

Defined in: [events/OutgoingResponse.ts:53](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L53)

Create an OutgoingResponse.

#### Parameters

##### options

[`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md)

A new OutgoingResponse instance.

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string` = `'stonejs@outgoing_response'`

Defined in: [events/OutgoingResponse.ts:25](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/OutgoingResponse.ts#L25)

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE
