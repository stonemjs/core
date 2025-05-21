[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandler

# Interface: IErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:840](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L840)

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

Defined in: [declarations.ts:841](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L841)
