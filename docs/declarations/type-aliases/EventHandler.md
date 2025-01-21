[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / EventHandler

# Type Alias: EventHandler\<TEvent, UResponse\>

> **EventHandler**\<`TEvent`, `UResponse`\>: [`EventHandlerFunction`](EventHandlerFunction.md)\<`TEvent`, `UResponse`\> \| [`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:267](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L267)

EventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

UResponse
