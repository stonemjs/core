[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [definitions](../README.md) / EventHandlerFunction

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

[src/definitions.ts:147](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/definitions.ts#L147)
