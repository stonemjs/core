[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalAdapterEventHandler

# Type Alias: FunctionalAdapterEventHandler()\<TEvent, UResponse\>

> **FunctionalAdapterEventHandler**\<`TEvent`, `UResponse`\>: (`incomingEvent`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [core/src/declarations.ts:1019](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1019)

FunctionalAdapterEventHandler.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
