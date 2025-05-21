[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerType

# Type Alias: EventHandlerType\<TEvent, UResponse\>

> **EventHandlerType**\<`TEvent`, `UResponse`\> = [`EventHandlerClass`](EventHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryEventHandler`](FactoryEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:625](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L625)

EventHandler Interface.
Represents an event handler that can handle incoming events and return outgoing responses.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Template

UResponse
