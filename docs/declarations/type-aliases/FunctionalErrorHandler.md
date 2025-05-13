[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalErrorHandler

# Type Alias: FunctionalErrorHandler()\<TEvent, UResponse\>

> **FunctionalErrorHandler**\<`TEvent`, `UResponse`\> = (`error`, `event`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [declarations.ts:715](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L715)

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
