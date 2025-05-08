[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ErrorHandlerType

# Type Alias: ErrorHandlerType\<TEvent, UResponse\>

> **ErrorHandlerType**\<`TEvent`, `UResponse`\>: [`IErrorHandlerClass`](IErrorHandlerClass.md)\<`TEvent`, `UResponse`\> \| [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\> \| [`FactoryErrorHandler`](FactoryErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:738](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L738)

ErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`
