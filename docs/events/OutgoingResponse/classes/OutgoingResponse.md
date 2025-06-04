[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [events/OutgoingResponse](../README.md) / OutgoingResponse

# Class: OutgoingResponse

Defined in: [events/OutgoingResponse.ts:20](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L20)

Class representing an OutgoingResponse.

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### Constructor

> `protected` **new OutgoingResponse**(`options`): `OutgoingResponse`

Defined in: [events/OutgoingResponse.ts:68](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L68)

Create an OutgoingResponse.

#### Parameters

##### options

[`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

`OutgoingResponse`

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructor)

## Properties

### \_content

> `protected` **\_content**: `unknown`

Defined in: [events/OutgoingResponse.ts:36](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L36)

The content of the response.

***

### \_statusCode?

> `protected` `optional` **\_statusCode**: `number`

Defined in: [events/OutgoingResponse.ts:41](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L41)

The status code of the response.

***

### \_statusMessage?

> `protected` `optional` **\_statusMessage**: `string`

Defined in: [events/OutgoingResponse.ts:46](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L46)

The status message of the response.

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [events/Event.ts:27](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L27)

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

***

### originalContent

> `readonly` **originalContent**: `unknown`

Defined in: [events/OutgoingResponse.ts:31](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L31)

The original content of the response.

***

### prepared

> `protected` **prepared**: `boolean`

Defined in: [events/OutgoingResponse.ts:51](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L51)

The prepared status of the response.

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: [events/Event.ts:32](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L32)

The source of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: [events/Event.ts:37](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L37)

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: [events/Event.ts:22](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L22)

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

## Accessors

### content

#### Get Signature

> **get** **content**(): `unknown`

Defined in: [events/OutgoingResponse.ts:108](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L108)

Gets the content of the outgoing response.

##### Returns

`unknown`

The content of the outgoing response.

***

### isPrepared

#### Get Signature

> **get** **isPrepared**(): `boolean`

Defined in: [events/OutgoingResponse.ts:117](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L117)

Gets the prepared status of the outgoing response.

##### Returns

`boolean`

The prepared status of the response.

***

### statusCode

#### Get Signature

> **get** **statusCode**(): `undefined` \| `number`

Defined in: [events/OutgoingResponse.ts:90](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L90)

Gets the status code of the outgoing response.

##### Returns

`undefined` \| `number`

The status code of the response, or undefined if not set.

***

### statusMessage

#### Get Signature

> **get** **statusMessage**(): `undefined` \| `string`

Defined in: [events/OutgoingResponse.ts:99](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L99)

Gets the status message of the outgoing response.

##### Returns

`undefined` \| `string`

The status message of the response, or undefined if not set.

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [events/Event.ts:135](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L135)

Return a cloned instance.

#### Type Parameters

##### T

`T` *extends* `OutgoingResponse`

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

Defined in: [events/Event.ts:57](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L57)

Get data from metadata.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`get`](../../Event/classes/Event.md#get)

#### Call Signature

> **get**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [events/Event.ts:66](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L66)

Get data from metadata.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

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

Defined in: [events/Event.ts:96](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L96)

Get data from metadata.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

##### Parameters

###### key

`string`

The key to retrieve from metadata.

##### Returns

`undefined` \| `TReturn`

The value associated with the key or the fallback.

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

#### Call Signature

> **getMetadataValue**\<`TReturn`\>(`key`, `fallback`): `TReturn`

Defined in: [events/Event.ts:105](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L105)

Get data from metadata.

##### Type Parameters

###### TReturn

`TReturn` = `unknown`

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

##### Param

The key to retrieve from metadata.

##### Param

The fallback value if the key is not found.

##### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

***

### is()

> **is**(`key`, `value`): `boolean`

Defined in: [events/Event.ts:86](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L86)

Check if the given value is equal to the specified value.

#### Parameters

##### key

`string`

The key to check.

##### value

`unknown`

The value to compare against.

#### Returns

`boolean`

True if the key's value is equal to the specified value, false otherwise.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`is`](../../Event/classes/Event.md#is)

***

### prepare()

> **prepare**(`_event`, `_container?`): [`Promiseable`](../../../declarations/type-aliases/Promiseable.md)\<`OutgoingResponse`\>

Defined in: [events/OutgoingResponse.ts:163](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L163)

Prepare response before sending it.

#### Parameters

##### \_event

[`IncomingEvent`](../../IncomingEvent/classes/IncomingEvent.md)

The incoming event associated with this response.

##### \_container?

`Container`

The container.

#### Returns

[`Promiseable`](../../../declarations/type-aliases/Promiseable.md)\<`OutgoingResponse`\>

This OutgoingResponse instance.

***

### setContent()

> **setContent**(`content`): `this`

Defined in: [events/OutgoingResponse.ts:140](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L140)

Set the content of the response.

#### Parameters

##### content

`unknown`

The content to set.

#### Returns

`this`

This OutgoingResponse instance.

***

### setMetadataValue()

> **setMetadataValue**(`key`, `value?`): `this`

Defined in: [events/Event.ts:125](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L125)

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

### setPrepared()

> **setPrepared**(`prepared`): `this`

Defined in: [events/OutgoingResponse.ts:151](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L151)

Set the prepared status of the response.

#### Parameters

##### prepared

`boolean`

The prepared status to set.

#### Returns

`this`

This OutgoingResponse instance.

***

### setStatus()

> **setStatus**(`code`, `text?`): `this`

Defined in: [events/OutgoingResponse.ts:128](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L128)

Set the status code of the response.

#### Parameters

##### code

`number`

The status code.

##### text?

`string`

Optional status message.

#### Returns

`this`

This OutgoingResponse instance.

***

### create()

> `static` **create**(`options`): `OutgoingResponse`

Defined in: [events/OutgoingResponse.ts:59](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L59)

Create an OutgoingResponse.

#### Parameters

##### options

[`OutgoingResponseOptions`](../interfaces/OutgoingResponseOptions.md)

The options to create an OutgoingResponse.

#### Returns

`OutgoingResponse`

A new OutgoingResponse instance.

## Events

### OUTGOING\_RESPONSE

> `static` **OUTGOING\_RESPONSE**: `string` = `'stonejs@outgoing_response'`

Defined in: [events/OutgoingResponse.ts:26](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/OutgoingResponse.ts#L26)

OUTGOING_RESPONSE Event name, fires on response to the incoming event.

 OutgoingResponse#OUTGOING_RESPONSE
