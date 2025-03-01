[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig\<TEvent, UResponse\>

Defined in: [core/src/options/KernelConfig.ts:12](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L12)

Kernel options.

This interface defines the configuration for kernel-level options.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaErrorHandler`](../../../declarations/interfaces/MetaErrorHandler.md)\<`TEvent`, `UResponse`\>\>

Defined in: [core/src/options/KernelConfig.ts:37](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L37)

Error handlers used to manage and report errors that occur within the kernel.
These handlers can be used to customize error handling behavior and logging.

***

### eventHandler?

> `optional` **eventHandler**: [`MixedEventHandler`](../../../declarations/type-aliases/MixedEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/options/KernelConfig.ts:31](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L31)

The main event handler for the application.
Every Stone.js application must have a main event handler.

***

### middleware?

> `optional` **middleware**: `MixedPipe`\<`TEvent`, `UResponse`\>[]

Defined in: [core/src/options/KernelConfig.ts:25](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L25)

Middleware configuration options for different stages of the kernel's lifecycle.

***

### responseResolver?

> `optional` **responseResolver**: [`ResponseResolver`](../../../declarations/type-aliases/ResponseResolver.md)\<`UResponse`\>

Defined in: [core/src/options/KernelConfig.ts:42](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L42)

The response resolver, used to create instances.

***

### skipMiddleware?

> `optional` **skipMiddleware**: `boolean`

Defined in: [core/src/options/KernelConfig.ts:20](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/KernelConfig.ts#L20)

A flag indicating whether to skip middleware processing.
This flag can be used to bypass middleware processing in the kernel.
