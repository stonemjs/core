[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

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

[src/options/KernelConfig.ts:17](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/KernelConfig.ts#L17)

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<`U`, `V`\>

The class type of the adapter, used to create instances.

#### Defined in

[src/options/KernelConfig.ts:21](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/KernelConfig.ts#L21)
