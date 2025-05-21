[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IEventListener

# Interface: IEventListener\<TEvent\>

Defined in: [declarations.ts:477](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L477)

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Type Parameters

### TEvent

`TEvent` *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Properties

### handle

> **handle**: [`FunctionalEventListener`](../type-aliases/FunctionalEventListener.md)\<`TEvent`\>

Defined in: [declarations.ts:483](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L483)

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Returns

The event listener function.
