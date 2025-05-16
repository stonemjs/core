[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IEventListener

# Interface: IEventListener\<TEvent\>

Defined in: [declarations.ts:472](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L472)

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Type Parameters

### TEvent

`TEvent` *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Properties

### handle

> **handle**: [`FunctionalEventListener`](../type-aliases/FunctionalEventListener.md)\<`TEvent`\>

Defined in: [declarations.ts:478](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L478)

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Returns

The event listener function.
