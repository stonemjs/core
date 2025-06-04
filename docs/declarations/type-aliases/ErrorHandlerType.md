[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorHandlerType

# Type Alias: ErrorHandlerType\<TEvent, UResponse\>

> **ErrorHandlerType**\<`TEvent`, `UResponse`\> = [`IErrorHandlerClass`](IErrorHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryErrorHandler`](FactoryErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:877](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L877)

ErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`
