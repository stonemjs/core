[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalAdapterErrorHandler

# Type Alias: FunctionalAdapterErrorHandler()\<RawEventType, RawResponseType, ExecutionContextType\>

> **FunctionalAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> = (`error`, `context`) => [`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [declarations.ts:1407](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1407)

FunctionalAdapterErrorHandler Type.

Represents a function that handles errors and returns responses.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`

## Parameters

### error

`any`

### context

[`AdapterErrorContext`](../interfaces/AdapterErrorContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

## Returns

[`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>
