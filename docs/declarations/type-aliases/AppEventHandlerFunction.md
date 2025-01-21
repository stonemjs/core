[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AppEventHandlerFunction

# Type Alias: AppEventHandlerFunction()\<TEvent, UResponse\>

> **AppEventHandlerFunction**\<`TEvent`, `UResponse`\>: (`incomingEvent`) => `UResponse` \| `unknown` \| `Promise`\<`UResponse` \| `unknown`\>

Defined in: [declarations.ts:232](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L232)

AppEventHandlerFunction.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

`UResponse` \| `unknown` \| `Promise`\<`UResponse` \| `unknown`\>

The outgoing response.
