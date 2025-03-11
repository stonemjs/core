[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventHandler

# Interface: IEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:422](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L422)

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

Defined in: [core/src/declarations.ts:423](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L423)
