[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterErrorContext

# Interface: AdapterErrorContext\<RawEventType, RawResponseType, ExecutionContextType\>

Defined in: [core/src/declarations.ts:1208](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1208)

Class representing an AdapterErrorContext.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

## Properties

### executionContext

> `readonly` **executionContext**: `ExecutionContextType`

Defined in: [core/src/declarations.ts:1217](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1217)

The executionContext of type ExecutionContextType.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [core/src/declarations.ts:1212](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1212)

The rawEvent of type RawEventType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [core/src/declarations.ts:1222](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1222)

The rawResponseBuilder.
