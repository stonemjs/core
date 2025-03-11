[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IKernelHook

# Interface: IKernelHook\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/declarations.ts:513](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L513)

Hook interface.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### onEventHandled?

> `optional` **onEventHandled**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:525](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L525)

***

### onExecutingErrorHandler?

> `optional` **onExecutingErrorHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:520](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L520)

***

### onExecutingEventHandler?

> `optional` **onExecutingEventHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:519](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L519)

***

### onHandlingEvent?

> `optional` **onHandlingEvent**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:518](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L518)

***

### onInit?

> `optional` **onInit**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:517](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L517)

***

### onKernelMiddlewareProcessed?

> `optional` **onKernelMiddlewareProcessed**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [core/src/declarations.ts:524](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L524)

***

### onPreparingResponse?

> `optional` **onPreparingResponse**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:521](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L521)

***

### onProcessingKernelMiddleware?

> `optional` **onProcessingKernelMiddleware**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [core/src/declarations.ts:523](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L523)

***

### onResponsePrepared?

> `optional` **onResponsePrepared**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:522](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L522)

***

### onTerminate?

> `optional` **onTerminate**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [core/src/declarations.ts:526](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L526)
