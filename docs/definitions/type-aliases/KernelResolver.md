[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / KernelResolver

# Type Alias: KernelResolver()\<U, V\>

> **KernelResolver**\<`U`, `V`\>: (`blueprint`) => [`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`U`, `V`\>

KernelResolver Type.

Represents a function that resolves a lifecycle event handler based on the provided blueprint.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• **blueprint**: [`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`LifecycleEventHandler`](../interfaces/LifecycleEventHandler.md)\<`U`, `V`\>

The lifecycle event handler.

## Defined in

[src/definitions.ts:320](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L320)
