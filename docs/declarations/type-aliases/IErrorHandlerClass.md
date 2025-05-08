[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IErrorHandlerClass

# Type Alias: IErrorHandlerClass()\<TEvent, UResponse\>

> **IErrorHandlerClass**\<`TEvent`, `UResponse`\>: (...`args`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:689](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L689)

IErrorHandlerClass Type.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### args

...`any`[]

The application constructor params.

## Returns

[`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

The error handler.
