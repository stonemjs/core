[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorHandlerType

# Type Alias: ErrorHandlerType\<TEvent, UResponse\>

> **ErrorHandlerType**\<`TEvent`, `UResponse`\> = [`IErrorHandlerClass`](IErrorHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryErrorHandler`](FactoryErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:738](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L738)

ErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`
