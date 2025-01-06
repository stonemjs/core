[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig\<TEvent, UResponse\>

Defined in: [src/options/KernelConfig.ts:12](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/KernelConfig.ts#L12)

Kernel options.

This interface defines the configuration for kernel-level options.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, (...`args`) => [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>\>

Defined in: [src/options/KernelConfig.ts:32](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/KernelConfig.ts#L32)

Error handlers used to manage and report errors that occur within the kernel.
These handlers can be used to customize error handling behavior and logging.

***

### middleware?

> `optional` **middleware**: `MixedPipe`[]

Defined in: [src/options/KernelConfig.ts:16](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/KernelConfig.ts#L16)

Middleware configuration options for different stages of the kernel's lifecycle.

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../definitions/type-aliases/KernelResolver.md)\<`TEvent`, `UResponse`\>

Defined in: [src/options/KernelConfig.ts:21](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/KernelConfig.ts#L21)

The kernel resolver, used to create instances.

***

### routerResolver?

> `optional` **routerResolver**: [`RouterResolver`](../../../definitions/type-aliases/RouterResolver.md)\<`TEvent`, `UResponse`\>

Defined in: [src/options/KernelConfig.ts:26](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/options/KernelConfig.ts#L26)

The router resolver, used to create instances.
