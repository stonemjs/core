[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FunctionalAdapterErrorHandler

# Type Alias: FunctionalAdapterErrorHandler()\<RawEventType, RawResponseType, ExecutionContextType\>

> **FunctionalAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\> = (`error`, `context`) => [`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [declarations.ts:1256](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1256)

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
