[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterEventHandlerType

# Type Alias: AdapterEventHandlerType\<TEvent, UResponse\>

> **AdapterEventHandlerType**\<`TEvent`, `UResponse`\> = [`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FunctionalAdapterEventHandler`](FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:1216](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1216)

AdapterEventHandler Type.

Represents an event handler which can either be a simple function or a lifecycle event handler object.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Template

UResponse
