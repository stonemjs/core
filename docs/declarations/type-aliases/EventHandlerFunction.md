[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / EventHandlerFunction

# Type Alias: EventHandlerFunction()\<TEvent, UResponse\>

> **EventHandlerFunction**\<`TEvent`, `UResponse`\>: (`incomingEvent`) => `UResponse` \| `Promise`\<`UResponse`\>

Defined in: [declarations.ts:258](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L258)

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
