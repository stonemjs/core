[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterHookType

# Interface: AdapterHookType\<AdapterContextType, RawResponseType\>

Defined in: [declarations.ts:1254](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1254)

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

Defined in: [declarations.ts:1257](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1257)

***

### onBuildingIncomingEvent?

> `optional` **onBuildingIncomingEvent**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1258](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1258)

***

### onBuildingRawResponse?

> `optional` **onBuildingRawResponse**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1260](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1260)

***

### onHandlingAdapterError?

> `optional` **onHandlingAdapterError**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1259](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1259)

***

### onProcessingAdapterMiddleware?

> `optional` **onProcessingAdapterMiddleware**: `PipelineHookListener`\<`AdapterContextType`, [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>, `any`[]\>[]

Defined in: [declarations.ts:1256](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1256)

***

### onStart?

> `optional` **onStart**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1255](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1255)

***

### onStop?

> `optional` **onStop**: [`AdapterHookListener`](../type-aliases/AdapterHookListener.md)\<`AdapterContextType`\>[]

Defined in: [declarations.ts:1261](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1261)
