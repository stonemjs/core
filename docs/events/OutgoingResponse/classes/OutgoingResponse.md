[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [events/OutgoingResponse](../README.md) / OutgoingResponse

# Class: OutgoingResponse

Class representing an OutgoingResponse.

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new OutgoingResponse()

> `protected` **new OutgoingResponse**(`options`): [`OutgoingResponse`](OutgoingResponse.md)

Create an OutgoingResponse.

#### Parameters

• **options**: [`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md)

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

#### Defined in

[src/events/OutgoingResponse.ts:62](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L62)

## Properties

### content

> `readonly` **content**: `unknown`

The content of the response.

#### Defined in

[src/events/OutgoingResponse.ts:30](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L30)

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

#### Defined in

[src/events/Event.ts:27](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L27)

***

### originalContent

> `readonly` **originalContent**: `unknown`

The original content of the response.

#### Defined in

[src/events/OutgoingResponse.ts:35](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L35)

***

### source?

> `readonly` `optional` **source**: `object`

The source of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

#### Defined in

[src/events/Event.ts:32](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L32)

***

### statusCode?

> `readonly` `optional` **statusCode**: `null` \| `number`

The status code of the response.

#### Defined in

[src/events/OutgoingResponse.ts:40](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L40)

***

### statusMessage?

> `readonly` `optional` **statusMessage**: `null` \| `string`

The status message of the response.

#### Defined in

[src/events/OutgoingResponse.ts:45](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L45)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

#### Defined in

[src/events/Event.ts:37](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L37)

***

### type

> `readonly` **type**: `string`

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

#### Defined in

[src/events/Event.ts:22](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L22)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`OutgoingResponse`](OutgoingResponse.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`clone`](../../Event/classes/Event.md#clone)

#### Defined in

[src/events/Event.ts:79](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L79)

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

[src/events/Event.ts:58](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L58)

***

### prepare()

> **prepare**(`_event`, `_blueprint`): [`OutgoingResponse`](OutgoingResponse.md) \| `Promise`\<[`OutgoingResponse`](OutgoingResponse.md)\>

Prepare response before sending it.

#### Parameters

• **\_event**: [`IncomingEvent`](../../IncomingEvent/classes/IncomingEvent.md)

The incoming event associated with this response.

• **\_blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

The blueprint.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md) \| `Promise`\<[`OutgoingResponse`](OutgoingResponse.md)\>

This OutgoingResponse instance.

#### Defined in

[src/events/OutgoingResponse.ts:85](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L85)

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

[src/events/Event.ts:69](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/Event.ts#L69)

***

### create()

> `static` **create**(`options`): [`OutgoingResponse`](OutgoingResponse.md)

Create an OutgoingResponse.

#### Parameters

• **options**: [`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

[`OutgoingResponse`](OutgoingResponse.md)

A new OutgoingResponse instance.

#### Defined in

[src/events/OutgoingResponse.ts:53](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L53)

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string` = `'stonejs@outgoing_response'`

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE

#### Defined in

[src/events/OutgoingResponse.ts:25](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/events/OutgoingResponse.ts#L25)
