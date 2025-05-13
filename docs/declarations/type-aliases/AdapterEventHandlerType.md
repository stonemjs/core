[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterEventHandlerType

# Type Alias: AdapterEventHandlerType\<TEvent, UResponse\>

> **AdapterEventHandlerType**\<`TEvent`, `UResponse`\> = [`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FunctionalAdapterEventHandler`](FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:1060](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1060)

AdapterEventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

UResponse
