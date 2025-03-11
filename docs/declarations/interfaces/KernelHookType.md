[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / KernelHookType

# Interface: KernelHookType\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/declarations.ts:492](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L492)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### onEventHandled?

> `optional` **onEventHandled**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:504](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L504)

***

### onExecutingErrorHandler?

> `optional` **onExecutingErrorHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:499](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L499)

***

### onExecutingEventHandler?

> `optional` **onExecutingEventHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:498](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L498)

***

### onHandlingEvent?

> `optional` **onHandlingEvent**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:497](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L497)

***

### onInit?

> `optional` **onInit**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:496](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L496)

***

### onKernelMiddlewareProcessed?

> `optional` **onKernelMiddlewareProcessed**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>[]

Defined in: [core/src/declarations.ts:503](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L503)

***

### onPreparingResponse?

> `optional` **onPreparingResponse**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:500](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L500)

***

### onProcessingKernelMiddleware?

> `optional` **onProcessingKernelMiddleware**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>[]

Defined in: [core/src/declarations.ts:502](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L502)

***

### onResponsePrepared?

> `optional` **onResponsePrepared**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:501](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L501)

***

### onTerminate?

> `optional` **onTerminate**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)[]

Defined in: [core/src/declarations.ts:505](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L505)
