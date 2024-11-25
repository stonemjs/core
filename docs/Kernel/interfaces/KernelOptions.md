[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [Kernel](../README.md) / KernelOptions

# Interface: KernelOptions\<U, V\>

KernelOptions.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/Kernel.ts:20](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/Kernel.ts#L20)

***

### container

> **container**: `Container`

#### Defined in

[src/Kernel.ts:19](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/Kernel.ts#L19)

***

### eventEmitter

> **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

#### Defined in

[src/Kernel.ts:21](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/Kernel.ts#L21)

***

### handlerResolver

> **handlerResolver**: [`KernelHandlerResolver`](../../definitions/type-aliases/KernelHandlerResolver.md)\<`U`, `V`\>

#### Defined in

[src/Kernel.ts:22](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/Kernel.ts#L22)

***

### logger

> **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/Kernel.ts:18](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/Kernel.ts#L18)
