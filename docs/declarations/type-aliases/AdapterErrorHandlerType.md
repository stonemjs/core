[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterErrorHandlerType

# Type Alias: AdapterErrorHandlerType\<RawEventType, RawResponseType, ExecutionContextType\>

> **AdapterErrorHandlerType**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> = [`IAdapterErrorHandlerClass`](IAdapterErrorHandlerClass.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FactoryAdapterErrorHandler`](FactoryAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FunctionalAdapterErrorHandler`](FunctionalAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [declarations.ts:1435](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1435)

AdapterErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`
