[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalAdapterEventHandler

# Type Alias: FunctionalAdapterEventHandler()\<TEvent, UResponse\>

> **FunctionalAdapterEventHandler**\<`TEvent`, `UResponse`\> = (`incomingEvent`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [declarations.ts:1049](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1049)

FunctionalAdapterEventHandler.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
