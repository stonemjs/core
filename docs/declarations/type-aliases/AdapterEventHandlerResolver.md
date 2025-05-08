[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterEventHandlerResolver

# Type Alias: AdapterEventHandlerResolver()\<TEvent, UResponse\>

> **AdapterEventHandlerResolver**\<`TEvent`, `UResponse`\>: (`blueprint`) => [`AdapterEventHandlerType`](AdapterEventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:1074](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1074)

AdapterEventHandlerResolver.

Represents a resolver that provides an event handler based on the provided blueprint.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`AdapterEventHandlerType`](AdapterEventHandlerType.md)\<`TEvent`, `UResponse`\>

The event handler.
