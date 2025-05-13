[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterErrorContext

# Interface: AdapterErrorContext\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [declarations.ts:1208](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1208)

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

Defined in: [declarations.ts:1217](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1217)

The executionContext of type ExecutionContextType.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:1212](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1212)

The rawEvent of type RawEventType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:1222](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1222)

The rawResponseBuilder.
