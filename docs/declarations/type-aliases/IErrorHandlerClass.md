[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandlerClass

# Type Alias: IErrorHandlerClass()\<TEvent, UResponse\>

> **IErrorHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:828](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L828)

IErrorHandlerClass Type.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Parameters

### args

...`any`[]

The application constructor params.

## Returns

[`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

The error handler.
