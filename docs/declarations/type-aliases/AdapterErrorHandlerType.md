[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterErrorHandlerType

# Type Alias: AdapterErrorHandlerType\<RawEventType, RawResponseType, ExecutionContextType\>

> **AdapterErrorHandlerType**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>: [`IAdapterErrorHandlerClass`](IAdapterErrorHandlerClass.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FactoryAdapterErrorHandler`](FactoryAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> \| [`FunctionalAdapterErrorHandler`](FunctionalAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [core/src/declarations.ts:1250](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1250)

AdapterErrorHandler Type.

Represents an error handler which can either be a class, a simple function or a factory function.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**
