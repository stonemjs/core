[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterEventHandlerType

# Type Alias: AdapterEventHandlerType\<TEvent, UResponse\>

> **AdapterEventHandlerType**\<`TEvent`, `UResponse`\>: [`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FunctionalAdapterEventHandler`](FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:1060](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1060)

AdapterEventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

UResponse
