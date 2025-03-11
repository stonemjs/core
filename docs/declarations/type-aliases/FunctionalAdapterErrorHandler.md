[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalAdapterErrorHandler

# Type Alias: FunctionalAdapterErrorHandler()\<RawEventType, RawResponseType, ExecutionContextType\>

> **FunctionalAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>: (`error`, `context`) => [`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/declarations.ts:1227](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1227)

FunctionalAdapterErrorHandler Type.

Represents a function that handles errors and returns responses.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Parameters

### error

`any`

### context

[`AdapterErrorContext`](../interfaces/AdapterErrorContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

## Returns

[`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>
