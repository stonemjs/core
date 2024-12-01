[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / AdapterHandlerResolver

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

[src/definitions.ts:212](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L212)
