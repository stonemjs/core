[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / AdapterHandlerResolver

# Type Alias: AdapterHandlerResolver()\<W, X\>

> **AdapterHandlerResolver**\<`W`, `X`\>: (`blueprint`) => [`EventHandler`](EventHandler.md)\<`W`, `X`\>

AdapterHandlerResolver.

Represents a resolver that provides an event handler based on the provided blueprint.

## Type Parameters

• **W** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **X** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• **blueprint**: [`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`EventHandler`](EventHandler.md)\<`W`, `X`\>

The event handler.

## Defined in

[src/definitions.ts:240](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L240)
