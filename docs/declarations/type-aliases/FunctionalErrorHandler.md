[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalErrorHandler

# Type Alias: FunctionalErrorHandler()\<TEvent, UResponse\>

> **FunctionalErrorHandler**\<`TEvent`, `UResponse`\> = (`error`, `event`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [declarations.ts:854](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L854)

FunctionalErrorHandler Type.

Represents a function that handles errors and returns responses.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Parameters

### error

`any`

The error to handle.

### event

`TEvent`

The incoming event.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
