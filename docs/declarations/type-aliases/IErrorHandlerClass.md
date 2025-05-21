[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandlerClass

# Type Alias: IErrorHandlerClass()\<TEvent, UResponse\>

> **IErrorHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:828](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L828)

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
