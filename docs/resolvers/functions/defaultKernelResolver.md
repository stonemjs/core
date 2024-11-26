[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [resolvers](../README.md) / defaultKernelResolver

# Function: defaultKernelResolver()

> **defaultKernelResolver**(`blueprint`): [`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

Default kernel resolver function.

This function resolves the kernel for the application, using the blueprint configuration.
It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)\<`any`\>

The blueprint configuration to use for the kernel.

## Returns

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md)\<[`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

- A `Kernel` instance configured with the provided blueprint.

## Defined in

[src/resolvers.ts:46](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/resolvers.ts#L46)
