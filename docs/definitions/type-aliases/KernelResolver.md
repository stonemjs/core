[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / KernelResolver

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

[src/definitions.ts:316](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L316)
