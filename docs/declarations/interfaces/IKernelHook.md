[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IKernelHook

# Interface: IKernelHook\<IncomingEventType, OutgoingResponseType\>

Defined in: [declarations.ts:541](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L541)

Hook interface.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### onEventHandled?

> `optional` **onEventHandled**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:553](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L553)

***

### onExecutingErrorHandler?

> `optional` **onExecutingErrorHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:548](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L548)

***

### onExecutingEventHandler?

> `optional` **onExecutingEventHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:547](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L547)

***

### onHandlingEvent?

> `optional` **onHandlingEvent**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:546](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L546)

***

### onInit?

> `optional` **onInit**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:545](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L545)

***

### onKernelMiddlewareProcessed?

> `optional` **onKernelMiddlewareProcessed**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:552](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L552)

***

### onPreparingResponse?

> `optional` **onPreparingResponse**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:549](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L549)

***

### onProcessingKernelMiddleware?

> `optional` **onProcessingKernelMiddleware**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:551](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L551)

***

### onResponsePrepared?

> `optional` **onResponsePrepared**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:550](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L550)

***

### onTerminate?

> `optional` **onTerminate**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:554](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L554)
