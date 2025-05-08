[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventHandler

# Interface: IEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:450](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L450)

EventHandler Interface.
Represents an event handler for processing incoming events and returning outgoing responses.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Properties

### handle

> **handle**: [`FunctionalEventHandler`](../type-aliases/FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:451](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L451)
