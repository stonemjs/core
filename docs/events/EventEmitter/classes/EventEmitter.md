[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [core/src/events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/events/EventEmitter.ts#L18)

Class representing an EventEmitter.

## Constructors

### new EventEmitter()

> **new EventEmitter**(): [`EventEmitter`](EventEmitter.md)

Defined in: [core/src/events/EventEmitter.ts:24](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/events/EventEmitter.ts#L24)

Create an EventEmitter.

#### Returns

[`EventEmitter`](EventEmitter.md)

## Methods

### emit()

> **emit**\<`TEvent`\>(`event`, `args`?): `Promise`\<`void`\>

Defined in: [core/src/events/EventEmitter.ts:64](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/events/EventEmitter.ts#L64)

Emits an event, triggering all associated listeners.

#### Type Parameters

• **TEvent** *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

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

Defined in: [core/src/events/EventEmitter.ts:49](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/events/EventEmitter.ts#L49)

Removes an event listener for the given event type.

#### Type Parameters

• **TEvent** *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

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

Defined in: [core/src/events/EventEmitter.ts:34](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/events/EventEmitter.ts#L34)

Registers an event listener for the given event type.

#### Type Parameters

• **TEvent** *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

#### Parameters

##### event

[`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)

The event name or type.

##### handler

[`MixedListenerHandler`](../../../declarations/type-aliases/MixedListenerHandler.md)\<`TEvent`, [`WildcardEventName`](../../../declarations/type-aliases/WildcardEventName.md)\>

The callback to invoke when the event is emitted.

#### Returns

`this`
