[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / KernelHookType

# Interface: KernelHookType\<IncomingEventType, OutgoingResponseType\>

Defined in: [declarations.ts:520](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L520)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### onEventHandled?

> `optional` **onEventHandled**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:532](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L532)

***

### onExecutingErrorHandler?

> `optional` **onExecutingErrorHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:527](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L527)

***

### onExecutingEventHandler?

> `optional` **onExecutingEventHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:526](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L526)

***

### onHandlingEvent?

> `optional` **onHandlingEvent**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:525](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L525)

***

### onInit?

> `optional` **onInit**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:524](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L524)

***

### onKernelMiddlewareProcessed?

> `optional` **onKernelMiddlewareProcessed**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>[]

Defined in: [declarations.ts:531](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L531)

***

### onPreparingResponse?

> `optional` **onPreparingResponse**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:528](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L528)

***

### onProcessingKernelMiddleware?

> `optional` **onProcessingKernelMiddleware**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>[]

Defined in: [declarations.ts:530](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L530)

***

### onResponsePrepared?

> `optional` **onResponsePrepared**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:529](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L529)

***

### onTerminate?

> `optional` **onTerminate**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [declarations.ts:533](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L533)
