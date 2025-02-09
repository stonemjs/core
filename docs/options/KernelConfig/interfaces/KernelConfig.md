[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/KernelConfig](../README.md) / KernelConfig

# Interface: KernelConfig\<TEvent, UResponse\>

Defined in: [core/src/options/KernelConfig.ts:12](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L12)

Kernel options.

This interface defines the configuration for kernel-level options.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### errorHandlers?

> `optional` **errorHandlers**: `Record`\<`string`, [`MetaErrorHandler`](../../../declarations/interfaces/MetaErrorHandler.md)\<`TEvent`, `UResponse`\>\>

Defined in: [core/src/options/KernelConfig.ts:37](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L37)

Error handlers used to manage and report errors that occur within the kernel.
These handlers can be used to customize error handling behavior and logging.

***

### hooks?

> `optional` **hooks**: [`KernelHook`](../../../declarations/type-aliases/KernelHook.md)

Defined in: [core/src/options/KernelConfig.ts:16](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L16)

Hooks used to manage the kernel's lifecycle.

***

### middleware?

> `optional` **middleware**: `MixedPipe`\<`TEvent`, `UResponse`\>[]

Defined in: [core/src/options/KernelConfig.ts:21](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L21)

Middleware configuration options for different stages of the kernel's lifecycle.

***

### resolver?

> `optional` **resolver**: [`KernelResolver`](../../../declarations/type-aliases/KernelResolver.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/options/KernelConfig.ts:26](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L26)

The kernel resolver, used to create instances.

***

### responseResolver?

> `optional` **responseResolver**: [`ResponseResolver`](../../../declarations/type-aliases/ResponseResolver.md)\<`UResponse`\>

Defined in: [core/src/options/KernelConfig.ts:31](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/KernelConfig.ts#L31)

The response resolver, used to create instances.
