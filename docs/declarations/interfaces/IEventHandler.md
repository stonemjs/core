[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IEventHandler

# Interface: IEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:589](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L589)

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

Defined in: [declarations.ts:590](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L590)
