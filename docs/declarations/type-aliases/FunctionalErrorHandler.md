[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalErrorHandler

# Type Alias: FunctionalErrorHandler()\<TEvent, UResponse\>

> **FunctionalErrorHandler**\<`TEvent`, `UResponse`\> = (`error`, `event`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [declarations.ts:849](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L849)

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
