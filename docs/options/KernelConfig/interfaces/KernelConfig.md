[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig\<U, V\>

Kernel options.

This interface defines the configuration for kernel-level options.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### middleware

> **middleware**: `MixedPipe`[]

Middleware configuration options for different stages of the kernel's lifecycle.

#### Defined in

[src/options/KernelConfig.ts:16](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/KernelConfig.ts#L16)

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<`U`, `V`\>

The class type of the adapter, used to create instances.

#### Defined in

[src/options/KernelConfig.ts:20](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/options/KernelConfig.ts#L20)
