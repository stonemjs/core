[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / KernelHandlerResolver

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

[src/definitions.ts:358](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L358)
