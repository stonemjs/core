[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig\<TEvent, UResponse\>

Defined in: [options/KernelConfig.ts:12](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L12)

Kernel options.

This interface defines the configuration for kernel-level options.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, (...`args`) => [`IErrorHandler`](../../../declarations/interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>\>

Defined in: [options/KernelConfig.ts:37](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L37)

Error handlers used to manage and report errors that occur within the kernel.
These handlers can be used to customize error handling behavior and logging.

***

### middleware?

> `optional` **middleware**: `MixedPipe`[]

Defined in: [options/KernelConfig.ts:16](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L16)

Middleware configuration options for different stages of the kernel's lifecycle.

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../declarations/type-aliases/KernelResolver.md)\<`TEvent`, `UResponse`\>

Defined in: [options/KernelConfig.ts:21](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L21)

The kernel resolver, used to create instances.

***

### responseResolver?

> `optional` **responseResolver**: [`ResponseResolver`](../../../declarations/type-aliases/ResponseResolver.md)\<`UResponse`\>

Defined in: [options/KernelConfig.ts:31](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L31)

The response resolver, used to create instances.

***

### routerResolver?

> `optional` **routerResolver**: [`RouterResolver`](../../../declarations/type-aliases/RouterResolver.md)\<`TEvent`, `UResponse`\>

Defined in: [options/KernelConfig.ts:26](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/KernelConfig.ts#L26)

The router resolver, used to create instances.
