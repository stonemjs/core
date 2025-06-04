[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [resolvers](../README.md) / defaultKernelResolver

# Function: defaultKernelResolver()

> **defaultKernelResolver**\<`U`, `V`\>(`blueprint`): [`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

Defined in: [resolvers.ts:45](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/resolvers.ts#L45)

Default kernel resolver function.

This function resolves the kernel for the application, using the blueprint configuration.
It creates a `Kernel` instance with the given blueprint, logger, container, and an event emitter.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint configuration to use for the kernel.

## Returns

[`Kernel`](../../Kernel/classes/Kernel.md)\<`U`, `V`\>

A `Kernel` instance configured with the provided blueprint.
