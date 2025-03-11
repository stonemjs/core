[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IErrorHandler

# Interface: IErrorHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:673](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L673)

ErrorHandler Interface.

Represents an error handler that provides methods to report and render errors.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Properties

### handle

> **handle**: [`FunctionalErrorHandler`](../type-aliases/FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:674](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L674)
