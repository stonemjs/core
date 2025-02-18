[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/KernelEvent](../README.md) / KernelEvent

# Class: KernelEvent

Defined in: [core/src/events/KernelEvent.ts:8](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L8)

Class representing a kernel Event.

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new KernelEvent()

> `protected` **new KernelEvent**(`options`): [`KernelEvent`](KernelEvent.md)

Defined in: [core/src/events/Event.ts:44](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L44)

Create an Event.

#### Parameters

##### options

[`EventOptions`](../../Event/interfaces/EventOptions.md)

The options to create an Event.

#### Returns

[`KernelEvent`](KernelEvent.md)

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

## Properties

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [core/src/events/Event.ts:27](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L27)

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

***

### source?

> `readonly` `optional` **source**: `object`

Defined in: [core/src/events/Event.ts:32](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L32)

The source of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

***

### timeStamp

> `readonly` **timeStamp**: `number`

Defined in: [core/src/events/Event.ts:37](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L37)

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

***

### type

> `readonly` **type**: `string`

Defined in: [core/src/events/Event.ts:22](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L22)

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [core/src/events/Event.ts:124](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L124)

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`KernelEvent`](KernelEvent.md)

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

Defined in: [core/src/events/Event.ts:57](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L57)

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

Defined in: [core/src/events/Event.ts:66](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L66)

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

Defined in: [core/src/events/Event.ts:85](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L85)

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

Defined in: [core/src/events/Event.ts:94](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L94)

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

Defined in: [core/src/events/Event.ts:114](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/Event.ts#L114)

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

> `static` **create**(`options`): [`KernelEvent`](KernelEvent.md)

Defined in: [core/src/events/KernelEvent.ts:44](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L44)

Create a KernelEvent.

#### Parameters

##### options

[`EventOptions`](../../Event/interfaces/EventOptions.md)

The options to create a KernelEvent.

#### Returns

[`KernelEvent`](KernelEvent.md)

A new KernelEvent instance.

## Events

### DISPATCHING\_EVENT

> `static` **DISPATCHING\_EVENT**: `string` = `'stonejs@kernel.dispatching_event'`

Defined in: [core/src/events/KernelEvent.ts:15](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L15)

DISPATCHING_EVENT Event name, fires before dispatching
the incoming event to the destination handler.

 KernelEvent#DISPATCHING_EVENT

***

### EVENT\_HANDLER\_FAILED

> `static` **EVENT\_HANDLER\_FAILED**: `string` = `'stonejs@kernel.event_handler_failed'`

Defined in: [core/src/events/KernelEvent.ts:36](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L36)

EVENT_HANDLER_FAILED Event name, fires when an event handler failed.

 KernelEvent#EVENT_HANDLER_FAILED

***

### PREPARING\_RESPONSE

> `static` **PREPARING\_RESPONSE**: `string` = `'stonejs@kernel.preparing_response'`

Defined in: [core/src/events/KernelEvent.ts:22](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L22)

PREPARING_RESPONSE Event name, fires before preparing the response.

 KernelEvent#PREPARING_RESPONSE

***

### RESPONSE\_PREPARED

> `static` **RESPONSE\_PREPARED**: `string` = `'stonejs@kernel.response_prepared'`

Defined in: [core/src/events/KernelEvent.ts:29](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/events/KernelEvent.ts#L29)

RESPONSE_PREPARED Event name, fires after the response was prepared.

 KernelEvent#RESPONSE_PREPARED
