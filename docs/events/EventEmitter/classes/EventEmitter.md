[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter

Defined in: [core/src/events/EventEmitter.ts:18](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L18)

Class representing an EventEmitter.

## Constructors

### new EventEmitter()

> **new EventEmitter**(): [`EventEmitter`](EventEmitter.md)

Defined in: [core/src/events/EventEmitter.ts:33](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L33)

Create an EventEmitter.

#### Returns

[`EventEmitter`](EventEmitter.md)

## Methods

### emit()

> **emit**\<`TEvent`\>(`event`, `args`?): `Promise`\<`void`\>

Defined in: [core/src/events/EventEmitter.ts:73](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L73)

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

Defined in: [core/src/events/EventEmitter.ts:58](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L58)

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

Defined in: [core/src/events/EventEmitter.ts:43](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L43)

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

***

### create()

> `static` **create**(): [`EventEmitter`](EventEmitter.md)

Defined in: [core/src/events/EventEmitter.ts:26](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/events/EventEmitter.ts#L26)

Create an EventEmitter.

#### Returns

[`EventEmitter`](EventEmitter.md)

A new EventEmitter instance.
