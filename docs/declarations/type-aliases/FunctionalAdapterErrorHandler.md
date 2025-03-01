[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalAdapterErrorHandler

# Type Alias: FunctionalAdapterErrorHandler()\<RawEventType, RawResponseType, ExecutionContextType\>

> **FunctionalAdapterErrorHandler**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>: (`error`, `context`) => [`Promiseable`](Promiseable.md)\<[`IAdapterEventBuilder`](../interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/declarations.ts:1226](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1226)

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
