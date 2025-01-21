[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / KernelResolver

# Type Alias: KernelResolver()\<TEvent, UResponse\>

> **KernelResolver**\<`TEvent`, `UResponse`\>: (`blueprint`) => [`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:380](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L380)

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

[`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`TEvent`, `UResponse`\>

The lifecycle event handler.
