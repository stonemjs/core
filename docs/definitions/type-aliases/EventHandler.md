[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / EventHandler

# Type Alias: EventHandler\<TEvent, UResponse\>

> **EventHandler**\<`TEvent`, `UResponse`\>: [`EventHandlerFunction`](EventHandlerFunction.md)\<`TEvent`, `UResponse`\> \| [`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [src/definitions.ts:216](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L216)

EventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

UResponse
