[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IKernelHook

# Interface: IKernelHook\<IncomingEventType, OutgoingResponseType\>

Defined in: [declarations.ts:680](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L680)

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

Defined in: [declarations.ts:692](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L692)

***

### onExecutingErrorHandler?

> `optional` **onExecutingErrorHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:687](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L687)

***

### onExecutingEventHandler?

> `optional` **onExecutingEventHandler**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:686](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L686)

***

### onHandlingEvent?

> `optional` **onHandlingEvent**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:685](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L685)

***

### onInit?

> `optional` **onInit**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:684](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L684)

***

### onKernelMiddlewareProcessed?

> `optional` **onKernelMiddlewareProcessed**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:691](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L691)

***

### onPreparingResponse?

> `optional` **onPreparingResponse**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:688](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L688)

***

### onProcessingKernelMiddleware?

> `optional` **onProcessingKernelMiddleware**: `PipelineHookListener`\<`IncomingEventType`, `OutgoingResponseType`, `any`[]\>

Defined in: [declarations.ts:690](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L690)

***

### onResponsePrepared?

> `optional` **onResponsePrepared**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:689](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L689)

***

### onTerminate?

> `optional` **onTerminate**: [`KernelHookListener`](../type-aliases/KernelHookListener.md)

Defined in: [declarations.ts:693](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L693)
