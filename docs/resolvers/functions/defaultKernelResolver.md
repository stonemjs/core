[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultKernelResolver

# Function: defaultKernelResolver()

> **defaultKernelResolver**\<`U`, `V`\>(`blueprint`): [`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

Defined in: [resolvers.ts:44](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/resolvers.ts#L44)

Default kernel resolver function.

This function resolves the kernel for the application, using the blueprint configuration.
It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint configuration to use for the kernel.

## Returns

[`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

- A `Kernel` instance configured with the provided blueprint.
