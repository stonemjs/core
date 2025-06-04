[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L18)

Class representing an EventEmitter.

## Constructors

### Constructor

> **new EventEmitter**(): `EventEmitter`

Defined in: [events/EventEmitter.ts:33](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L33)

Create an EventEmitter.

#### Returns

`EventEmitter`

## Methods

### emit()

> **emit**\<`TEvent`\>(`event`, `args?`): `Promise`\<`void`\>

Defined in: [events/EventEmitter.ts:73](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L73)

Emits an event, triggering all associated listeners.

#### Type Parameters

##### TEvent

`TEvent` *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

#### Parameters

##### event

The event name or an instance of Event.

`string` | `symbol` | `TEvent`

##### args?

`any`

Additional arguments to pass to the listeners.

#### Returns

`Promise`\<`void`\>

***

### off()

> **off**\<`TEvent`\>(`event`, `handler`): `this`

Defined in: [events/EventEmitter.ts:58](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L58)

Removes an event listener for the given event type.

#### Type Parameters

##### TEvent

`TEvent` *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

#### Parameters

##### event

[`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)

The event name or type.

##### handler

[`MixedListenerHandler`](../../../declarations/type-aliases/MixedListenerHandler.md)\<`TEvent`, [`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)\>

The callback to remove.

#### Returns

`this`

***

### on()

> **on**\<`TEvent`\>(`event`, `handler`): `this`

Defined in: [events/EventEmitter.ts:43](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L43)

Registers an event listener for the given event type.

#### Type Parameters

##### TEvent

`TEvent` *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

#### Parameters

##### event

[`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)

The event name or type.

##### handler

[`MixedListenerHandler`](../../../declarations/type-aliases/MixedListenerHandler.md)\<`TEvent`, [`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)\>

The callback to invoke when the event is emitted.

#### Returns

`this`

***

### create()

> `static` **create**(): `EventEmitter`

Defined in: [events/EventEmitter.ts:26](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/events/EventEmitter.ts#L26)

Create an EventEmitter.

#### Returns

`EventEmitter`

A new EventEmitter instance.
