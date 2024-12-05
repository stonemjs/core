[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [resolvers](../README.md) / defaultKernelResolver

# Function: defaultKernelResolver()

> **defaultKernelResolver**\<`U`, `V`\>(`blueprint`): [`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

Default kernel resolver function.

This function resolves the kernel for the application, using the blueprint configuration.
It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

The blueprint configuration to use for the kernel.

## Returns

[`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

- A `Kernel` instance configured with the provided blueprint.

## Defined in

[src/resolvers.ts:48](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/resolvers.ts#L48)
