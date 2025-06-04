[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [events/IncomingEvent](../README.md) / IncomingEvent

# Class: IncomingEvent

Defined in: [events/IncomingEvent.ts:19](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L19)

Class representing an IncomingEvent.

## Author

Mr. Stone <evensstone@gmail.com>

## Extends

- [`Event`](../../Event/classes/Event.md)

## Constructors

### Constructor

> `protected` **new IncomingEvent**(`options`): `IncomingEvent`

Defined in: [events/IncomingEvent.ts:52](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L52)

Create an IncomingEvent.

#### Parameters

##### options

[`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

`IncomingEvent`

#### Overrides

[`Event`](../../Event/classes/Event.md).[`constructor`](../../Event/classes/Event.md#constructor)

## Properties

### locale

> `readonly` **locale**: `string`

Defined in: [events/IncomingEvent.ts:30](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L30)

The locale of the event.

***

### metadata

> `readonly` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [events/Event.ts:27](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L27)

The metadata associated with the event.

#### Inherited from

[`Event`](../../Event/classes/Event.md).[`metadata`](../../Event/classes/Event.md#metadata)

***

### source

> `readonly` **source**: [`IncomingEventSource`](../../../declarations/interfaces/IncomingEventSource.md)

Defined in: [events/IncomingEvent.ts:35](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L35)

The source of the event.

#### Overrides

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

### platform

#### Get Signature

> **get** **platform**(): `string` \| `symbol`

Defined in: [events/IncomingEvent.ts:69](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L69)

Get the platform of the event source.

##### Returns

`string` \| `symbol`

The platform of the event source.

## Methods

### clone()

> **clone**\<`T`\>(): `T`

Defined in: [events/Event.ts:135](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/Event.ts#L135)

Return a cloned instance.

#### Type Parameters

##### T

`T` *extends* `IncomingEvent`

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

### isPlatform()

> **isPlatform**(`platform`): `boolean`

Defined in: [events/IncomingEvent.ts:79](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L79)

Check if the event source is from a platform.

#### Parameters

##### platform

The platform to check.

`string` | `symbol`

#### Returns

`boolean`

True if the event source is from the platform, false otherwise.

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

### create()

> `static` **create**(`options`): `IncomingEvent`

Defined in: [events/IncomingEvent.ts:43](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L43)

Create an IncomingEvent.

#### Parameters

##### options

[`IncomingEventOptions`](../interfaces/IncomingEventOptions.md)

The options to create an IncomingEvent.

#### Returns

`IncomingEvent`

A new IncomingEvent instance.

## Events

### INCOMING\_EVENT

> `static` **INCOMING\_EVENT**: `string` = `'stonejs@incoming_event'`

Defined in: [events/IncomingEvent.ts:25](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/IncomingEvent.ts#L25)

INCOMING_EVENT Event name, fires on platform message.

 IncomingEvent#INCOMING_EVENT
