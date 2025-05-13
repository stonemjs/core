[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IErrorHandlerClass

# Type Alias: IErrorHandlerClass()\<TEvent, UResponse\>

> **IErrorHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:689](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L689)

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
