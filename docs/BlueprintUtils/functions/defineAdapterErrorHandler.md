[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineAdapterErrorHandler

# Function: defineAdapterErrorHandler()

> **defineAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>(`module`, `options`): [`MetaAdapterErrorHandler`](../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [BlueprintUtils.ts:106](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L106)

Defines an adapter error handler with metadata for the provided handler function.
This function allows users to define an adapter error handler with metadata.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`

## Parameters

### module

[`AdapterErrorHandlerType`](../../declarations/type-aliases/AdapterErrorHandlerType.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The module handler function to be defined.

### options

`Omit`\<[`MetaAdapterErrorHandler`](../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>, `"module"`\>

The metadata options for the handler.

## Returns

[`MetaAdapterErrorHandler`](../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The defined error handler with metadata.
