[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterErrorContext

# Interface: AdapterErrorContext\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [declarations.ts:1359](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1359)

Class representing an AdapterErrorContext.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`

## Properties

### executionContext

> `readonly` **executionContext**: `ExecutionContextType`

Defined in: [declarations.ts:1368](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1368)

The executionContext of type ExecutionContextType.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:1363](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1363)

The rawEvent of type RawEventType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:1373](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1373)

The rawResponseBuilder.
