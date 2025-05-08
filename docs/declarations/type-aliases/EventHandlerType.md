[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / EventHandlerType

# Type Alias: EventHandlerType\<TEvent, UResponse\>

> **EventHandlerType**\<`TEvent`, `UResponse`\>: [`EventHandlerClass`](EventHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryEventHandler`](FactoryEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:486](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L486)

EventHandler Interface.
Represents an event handler that can handle incoming events and return outgoing responses.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Template

UResponse
