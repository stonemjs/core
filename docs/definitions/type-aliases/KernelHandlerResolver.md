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

[src/definitions.ts:358](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L358)
