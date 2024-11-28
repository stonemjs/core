[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig

Kernel options.

This interface defines the configuration for kernel-level options.

## Properties

### middleware

> **middleware**: `MixedPipe`[]

Middleware configuration options for different stages of the kernel's lifecycle.

#### Defined in

[src/options/KernelConfig.ts:16](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/options/KernelConfig.ts#L16)

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The class type of the adapter, used to create instances.

#### Defined in

[src/options/KernelConfig.ts:21](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/options/KernelConfig.ts#L21)
