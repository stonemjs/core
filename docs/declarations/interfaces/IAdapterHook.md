[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IAdapterHook

# Interface: IAdapterHook\<AdapterContextType, RawResponseType\>

Defined in: [declarations.ts:1274](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1274)

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

Defined in: [declarations.ts:1277](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1277)

***

### onBuildingIncomingEvent?

> `optional` **onBuildingIncomingEvent**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1278](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1278)

***

### onBuildingRawResponse?

> `optional` **onBuildingRawResponse**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1280](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1280)

***

### onHandlingAdapterError?

> `optional` **onHandlingAdapterError**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1279](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1279)

***

### onProcessingAdapterMiddleware?

> `optional` **onProcessingAdapterMiddleware**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>

Defined in: [declarations.ts:1276](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1276)

***

### onStart?

> `optional` **onStart**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1275](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1275)

***

### onStop?

> `optional` **onStop**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>

Defined in: [declarations.ts:1281](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1281)
