[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig

Kernel options.

This interface defines the configuration for kernel-level options.

## Properties

### middleware

> **middleware**: [`KernelMiddlewareConfig`](KernelMiddlewareConfig.md)

Middleware configuration options for different stages of the kernel's lifecycle.

#### Defined in

[src/options/KernelConfig.ts:49](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/KernelConfig.ts#L49)

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The class type of the adapter, used to create instances.

#### Defined in

[src/options/KernelConfig.ts:54](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/options/KernelConfig.ts#L54)
