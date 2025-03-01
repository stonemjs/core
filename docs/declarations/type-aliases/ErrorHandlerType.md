[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ErrorHandlerType

# Type Alias: ErrorHandlerType\<TEvent, UResponse\>

> **ErrorHandlerType**\<`TEvent`, `UResponse`\>: [`IErrorHandlerClass`](IErrorHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryErrorHandler`](FactoryErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:709](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L709)

ErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`
