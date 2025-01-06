[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / EventHandlerFunction

# Type Alias: EventHandlerFunction()\<TEvent, UResponse\>

> **EventHandlerFunction**\<`TEvent`, `UResponse`\>: (`incomingEvent`) => `UResponse` \| `Promise`\<`UResponse`\>

Defined in: [src/definitions.ts:160](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L160)

EventHandlerFunction.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

`UResponse` \| `Promise`\<`UResponse`\>

The outgoing response.
