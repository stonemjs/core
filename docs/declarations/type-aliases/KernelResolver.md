[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / KernelResolver

# Type Alias: KernelResolver()\<TEvent, UResponse\>

> **KernelResolver**\<`TEvent`, `UResponse`\> = (`blueprint`) => [`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:658](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L658)

KernelResolver Type.

Represents a function that resolves a lifecycle event handler based on the provided blueprint.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

The lifecycle event handler.
