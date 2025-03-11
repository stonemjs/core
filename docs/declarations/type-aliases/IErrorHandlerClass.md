[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IErrorHandlerClass

# Type Alias: IErrorHandlerClass()\<TEvent, UResponse\>

> **IErrorHandlerClass**\<`TEvent`, `UResponse`\>: (...`args`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:661](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L661)

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
