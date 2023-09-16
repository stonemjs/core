[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / EventHandlerFunction

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

[src/definitions.ts:173](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L173)
