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

[src/definitions.ts:229](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L229)
