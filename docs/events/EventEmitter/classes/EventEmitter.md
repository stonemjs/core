[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [events/EventEmitter](../README.md) / EventEmitter

# Class: EventEmitter\<TEvent\>

Defined in: [events/EventEmitter.ts:12](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/EventEmitter.ts#L12)

Class representing an EventEmitter.

## Type Parameters

• **TEvent** *extends* [`Event`](../../Event/classes/Event.md) = [`Event`](../../Event/classes/Event.md)

## Constructors

### new EventEmitter()

> **new EventEmitter**\<`TEvent`\>(): [`EventEmitter`](EventEmitter.md)\<`TEvent`\>

Defined in: [events/EventEmitter.ts:17](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/EventEmitter.ts#L17)

Create an EventEmitter.

#### Returns

[`EventEmitter`](EventEmitter.md)\<`TEvent`\>

## Methods

### emit()

> **emit**(`event`, `args`?): `void`

Defined in: [events/EventEmitter.ts:47](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/EventEmitter.ts#L47)

Emits an event, triggering all associated listeners.

#### Parameters

##### event

The event name or an instance of Event.

`string` | `symbol` | `TEvent`

##### args?

`TEvent`

Additional arguments to pass to the listeners.

#### Returns

`void`

***

### off()

> **off**(`event`, `listener`): `void`

Defined in: [events/EventEmitter.ts:37](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/EventEmitter.ts#L37)

Removes an event listener for the given event type.

#### Parameters

##### event

The event name or type.

`string` | `symbol`

##### listener

The callback to remove.

`Handler`\<[`Event`](../../Event/classes/Event.md)\> | `WildcardHandler`\<`Record`\<`string` \| `symbol`, `TEvent`\>\>

#### Returns

`void`

***

### on()

> **on**(`event`, `listener`): `void`

Defined in: [events/EventEmitter.ts:27](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/events/EventEmitter.ts#L27)

Registers an event listener for the given event type.

#### Parameters

##### event

The event name or type.

`string` | `symbol`

##### listener

The callback to invoke when the event is emitted.

`Handler`\<[`Event`](../../Event/classes/Event.md)\> | `WildcardHandler`\<`Record`\<`string` \| `symbol`, `TEvent`\>\>

#### Returns

`void`
