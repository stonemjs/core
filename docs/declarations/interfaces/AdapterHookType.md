[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterHookType

# Interface: AdapterHookType\<AdapterContextType, RawResponseType\>

Defined in: [declarations.ts:1103](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1103)

AdapterHook type.

Represents lifecycle hooks that can be defined for the adapter, such as initialization, pre-handling, and termination.

## Type Parameters

### AdapterContextType

`AdapterContextType` = `any`

### RawResponseType

`RawResponseType` = `any`

## Properties

### onAdapterMiddlewareProcessed?

> `optional` **onAdapterMiddlewareProcessed**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>[]

Defined in: [declarations.ts:1106](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1106)

***

### onBuildingIncomingEvent?

> `optional` **onBuildingIncomingEvent**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1107](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1107)

***

### onBuildingRawResponse?

> `optional` **onBuildingRawResponse**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1109](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1109)

***

### onHandlingAdapterError?

> `optional` **onHandlingAdapterError**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1108](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1108)

***

### onProcessingAdapterMiddleware?

> `optional` **onProcessingAdapterMiddleware**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>[]

Defined in: [declarations.ts:1105](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1105)

***

### onStart?

> `optional` **onStart**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1104](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1104)

***

### onStop?

> `optional` **onStop**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1110](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L1110)
