[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerType

# Type Alias: EventHandlerType\<TEvent, UResponse\>

> **EventHandlerType**\<`TEvent`, `UResponse`\> = [`EventHandlerClass`](EventHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryEventHandler`](FactoryEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:625](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L625)

EventHandler Interface.
Represents an event handler that can handle incoming events and return outgoing responses.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Template

UResponse
