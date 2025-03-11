[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventListener

# Interface: IEventListener\<TEvent\>

Defined in: [core/src/declarations.ts:310](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L310)

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Type Parameters

• **TEvent** *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Properties

### handle

> **handle**: [`FunctionalEventListener`](../type-aliases/FunctionalEventListener.md)\<`TEvent`\>

Defined in: [core/src/declarations.ts:316](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L316)

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Returns

The event listener function.
