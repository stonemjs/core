[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalEventHandler

# Type Alias: FunctionalEventHandler()\<TEvent, UResponse\>

> **FunctionalEventHandler**\<`TEvent`, `UResponse`\> = (`incomingEvent`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [declarations.ts:602](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L602)

FunctionalEventHandler.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
