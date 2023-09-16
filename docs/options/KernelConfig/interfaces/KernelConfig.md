[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig

Kernel options.

This interface defines the configuration for kernel-level options, specifically the middleware settings
to be used across all adapters.

## Properties

### middleware

> **middleware**: [`KernelMiddlewareConfig`](KernelMiddlewareConfig.md)

Middleware configuration options for different stages of the kernel's lifecycle.

#### Defined in

[src/options/KernelConfig.ts:50](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/KernelConfig.ts#L50)

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>

The class type of the adapter, used to create instances.

#### Defined in

[src/options/KernelConfig.ts:55](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/KernelConfig.ts#L55)
