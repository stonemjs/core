[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IEventHandler

# Interface: IEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:450](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L450)

EventHandler Interface.
Represents an event handler for processing incoming events and returning outgoing responses.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Properties

### handle

> **handle**: [`FunctionalEventHandler`](../type-aliases/FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:451](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L451)
