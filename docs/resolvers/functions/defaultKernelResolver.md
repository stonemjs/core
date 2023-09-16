[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [resolvers](../README.md) / defaultKernelResolver

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

[src/resolvers.ts:46](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/resolvers.ts#L46)
