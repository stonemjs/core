[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandler

# Interface: IErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:835](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L835)

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

Defined in: [declarations.ts:836](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L836)
