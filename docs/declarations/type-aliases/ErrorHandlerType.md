[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorHandlerType

# Type Alias: ErrorHandlerType\<TEvent, UResponse\>

> **ErrorHandlerType**\<`TEvent`, `UResponse`\> = [`IErrorHandlerClass`](IErrorHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryErrorHandler`](FactoryErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:872](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L872)

ErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`
