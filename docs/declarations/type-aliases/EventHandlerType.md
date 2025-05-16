[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerType

# Type Alias: EventHandlerType\<TEvent, UResponse\>

> **EventHandlerType**\<`TEvent`, `UResponse`\> = [`EventHandlerClass`](EventHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryEventHandler`](FactoryEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:620](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L620)

EventHandler Interface.
Represents an event handler that can handle incoming events and return outgoing responses.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Template

UResponse
