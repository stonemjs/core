[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / KernelHandlerResolver

# Type Alias: KernelHandlerResolver()\<W, X\>

> **KernelHandlerResolver**\<`W`, `X`\>: (`container`) => [`EventHandler`](EventHandler.md)\<`W`, `X`\>

KernelHandlerResolver Type.

Represents a function that resolves an event handler based on the provided container.

## Type Parameters

• **W** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **X** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• **container**: `Container`

The service container.

## Returns

[`EventHandler`](EventHandler.md)\<`W`, `X`\>

The event handler.

## Defined in

[src/definitions.ts:358](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/definitions.ts#L358)
