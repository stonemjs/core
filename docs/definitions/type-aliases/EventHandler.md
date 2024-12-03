[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / EventHandler

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

[src/definitions.ts:201](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L201)
