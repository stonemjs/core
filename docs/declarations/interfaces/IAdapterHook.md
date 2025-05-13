[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IAdapterHook

# Interface: IAdapterHook\<AdapterContextType, RawResponseType\>

Defined in: [declarations.ts:1118](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1118)

AdapterHook Interface.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Type Parameters

### AdapterContextType

`AdapterContextType` = `any`

### RawResponseType

`RawResponseType` = `any`

## Properties

### onAdapterMiddlewareProcessed?

> `optional` **onAdapterMiddlewareProcessed**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>

Defined in: [declarations.ts:1121](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1121)

***

### onBuildingIncomingEvent?

> `optional` **onBuildingIncomingEvent**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1122](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1122)

***

### onBuildingRawResponse?

> `optional` **onBuildingRawResponse**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1124](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1124)

***

### onHandlingAdapterError?

> `optional` **onHandlingAdapterError**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1123](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1123)

***

### onProcessingAdapterMiddleware?

> `optional` **onProcessingAdapterMiddleware**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>

Defined in: [declarations.ts:1120](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1120)

***

### onStart?

> `optional` **onStart**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1119](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1119)

***

### onStop?

> `optional` **onStop**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1125](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1125)
