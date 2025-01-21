[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterErrorContext

# Interface: AdapterErrorContext\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [declarations.ts:574](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L574)

Class representing an AdapterErrorContext.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### executionContext

> `readonly` **executionContext**: `ExecutionContextType`

Defined in: [declarations.ts:583](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L583)

The executionContext of type ExecutionContextType.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:578](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L578)

The rawEvent of type RawEventType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:588](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L588)

The rawResponseBuilder.
