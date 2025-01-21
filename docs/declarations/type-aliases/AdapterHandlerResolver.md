[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterHandlerResolver

# Type Alias: AdapterHandlerResolver()\<TEvent, UResponse\>

> **AdapterHandlerResolver**\<`TEvent`, `UResponse`\>: (`blueprint`) => [`EventHandler`](EventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:278](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L278)

AdapterHandlerResolver.

Represents a resolver that provides an event handler based on the provided blueprint.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`EventHandler`](EventHandler.md)\<`TEvent`, `UResponse`\>

The event handler.
