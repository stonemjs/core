[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [events/KernelEvent](../README.md) / KernelEvent

# Class: KernelEvent

Class representing a kernel Event.

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### new KernelEvent()

> **new KernelEvent**(`options`): [`KernelEvent`](KernelEvent.md)

Create an Event.

#### Parameters

• **options**: [`EventOptions`](../../Event/interfaces/EventOptions.md)

The options to create an Event.

#### Returns

[`KernelEvent`](KernelEvent.md)

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructors)

#### Defined in

[src/events/Event.ts:44](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L44)

## Properties

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

#### Defined in

[src/events/Event.ts:27](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L27)

***

### source?

> `readonly` `optional` **source**: `object`

The source of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`source`](../../Event/classes/Event.md#source)

#### Defined in

[src/events/Event.ts:32](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L32)

***

### timeStamp

> `readonly` **timeStamp**: `number`

The timestamp of the event creation.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`timeStamp`](../../Event/classes/Event.md#timestamp)

#### Defined in

[src/events/Event.ts:37](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L37)

***

### type

> `readonly` **type**: `string`

The type of the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`type`](../../Event/classes/Event.md#type)

#### Defined in

[src/events/Event.ts:22](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L22)

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Return a cloned instance.

#### Type Parameters

• **T** *extends* [`KernelEvent`](KernelEvent.md)

#### Returns

`T`

A cloned instance of the current class.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`clone`](../../Event/classes/Event.md#clone)

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

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`get`](../../Event/classes/Event.md#get)

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

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`getMetadataValue`](../../Event/classes/Event.md#getmetadatavalue)

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

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`setMetadataValue`](../../Event/classes/Event.md#setmetadatavalue)

#### Defined in

[src/events/Event.ts:80](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/Event.ts#L80)

***

### create()

> `static` **create**(`options`): [`KernelEvent`](KernelEvent.md)

Create a KernelEvent.

#### Parameters

• **options**: [`EventOptions`](../../Event/interfaces/EventOptions.md)

The options to create a KernelEvent.

#### Returns

[`KernelEvent`](KernelEvent.md)

A new KernelEvent instance.

#### Defined in

[src/events/KernelEvent.ts:29](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/KernelEvent.ts#L29)

## Events

### PREPARING\_RESPONSE

> `static` **PREPARING\_RESPONSE**: `string` = `'stonejs@kernel.preparing_response'`

PREPARING_RESPONSE Event name, fires after the response was prepared.

 KernelEvent#PREPARING_RESPONSE

#### Defined in

[src/events/KernelEvent.ts:21](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/KernelEvent.ts#L21)

***

### RESPONSE\_PREPARED

> `static` **RESPONSE\_PREPARED**: `string` = `'stonejs@kernel.response_prepared'`

RESPONSE_PREPARED Event name, fires before preparing the response.

 KernelEvent#RESPONSE_PREPARED

#### Defined in

[src/events/KernelEvent.ts:14](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/events/KernelEvent.ts#L14)
