[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterErrorHandlerType

# Type Alias: AdapterErrorHandlerType\<RawEventType, RawResponseType, ExecutionContextType\>

> **AdapterErrorHandlerType**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> = [`IAdapterErrorHandlerClass`](IAdapterErrorHandlerClass.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FactoryAdapterErrorHandler`](FactoryAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FunctionalAdapterErrorHandler`](FunctionalAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [declarations.ts:1279](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1279)

AdapterErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`
