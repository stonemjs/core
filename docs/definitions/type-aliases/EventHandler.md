[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / EventHandler

# Type Alias: EventHandler\<W, X\>

> **EventHandler**\<`W`, `X`\>: [`EventHandlerFunction`](EventHandlerFunction.md)\<`W`, `X`\> \| [`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`W`, `X`\>

EventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

• **W** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **X** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

X

## Defined in

[src/definitions.ts:229](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L229)
