[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterErrorContext

# Interface: AdapterErrorContext\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [declarations.ts:1364](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1364)

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

Defined in: [declarations.ts:1373](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1373)

The executionContext of type ExecutionContextType.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:1368](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1368)

The rawEvent of type RawEventType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:1378](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1378)

The rawResponseBuilder.
