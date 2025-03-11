[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / KernelResolver

# Type Alias: KernelResolver()\<TEvent, UResponse\>

> **KernelResolver**\<`TEvent`, `UResponse`\>: (`blueprint`) => [`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:630](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L630)

KernelResolver Type.

Represents a function that resolves a lifecycle event handler based on the provided blueprint.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`ILifecycleAdapterEventHandler`](../interfaces/ILifecycleAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

The lifecycle event handler.
