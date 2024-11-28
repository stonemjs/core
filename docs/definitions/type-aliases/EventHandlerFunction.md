[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / EventHandlerFunction

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

[src/definitions.ts:146](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L146)
