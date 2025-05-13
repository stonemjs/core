[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandler

# Interface: IErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:701](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L701)

ErrorHandler Interface.

Represents an error handler that provides methods to report and render errors.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Properties

### handle

> **handle**: [`FunctionalErrorHandler`](../type-aliases/FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:702](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L702)
