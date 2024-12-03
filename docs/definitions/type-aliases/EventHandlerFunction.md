[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / EventHandlerFunction

# Type Alias: EventHandlerFunction()\<W, X\>

> **EventHandlerFunction**\<`W`, `X`\>: (`incomingEvent`) => `X` \| `Promise`\<`X`\>

EventHandlerFunction.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

• **W** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **X** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• **incomingEvent**: `W`

The incoming event to handle.

## Returns

`X` \| `Promise`\<`X`\>

The outgoing response.

## Defined in

[src/definitions.ts:147](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L147)
