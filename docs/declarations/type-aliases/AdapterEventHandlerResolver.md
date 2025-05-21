[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterEventHandlerResolver

# Type Alias: AdapterEventHandlerResolver()\<TEvent, UResponse\>

> **AdapterEventHandlerResolver**\<`TEvent`, `UResponse`\> = (`blueprint`) => [`AdapterEventHandlerType`](AdapterEventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:1230](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1230)

AdapterEventHandlerResolver.

Represents a resolver that provides an event handler based on the provided blueprint.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`AdapterEventHandlerType`](AdapterEventHandlerType.md)\<`TEvent`, `UResponse`\>

The event handler.
