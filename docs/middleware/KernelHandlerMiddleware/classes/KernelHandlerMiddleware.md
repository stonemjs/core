[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [middleware/KernelHandlerMiddleware](../README.md) / KernelHandlerMiddleware

# Class: KernelHandlerMiddleware\<IncomingEventType, OutgoingResponseType, KernelContextType\>

Class representing the KernelHandlerMiddleware.

This middleware is responsible for handling routing and event processing within the kernel context.
It uses routers and event handlers to process incoming events and generate responses.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

The type of incoming event, extending IncomingEvent.

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

The type of outgoing response, extending OutgoingResponse.

• **KernelContextType** *extends* [`KernelContext`](../../../definitions/interfaces/KernelContext.md)\<`IncomingEventType`, `OutgoingResponseType`\> = [`KernelContext`](../../../definitions/interfaces/KernelContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The type of kernel context, default is KernelContext.

## Constructors

### new KernelHandlerMiddleware()

> **new KernelHandlerMiddleware**\<`IncomingEventType`, `OutgoingResponseType`, `KernelContextType`\>(`options`): [`KernelHandlerMiddleware`](KernelHandlerMiddleware.md)\<`IncomingEventType`, `OutgoingResponseType`, `KernelContextType`\>

Constructor for the KernelHandlerMiddleware.

#### Parameters

• **options**

The container used for dependency injection.

• **options.blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

• **options.container**: `Container`

#### Returns

[`KernelHandlerMiddleware`](KernelHandlerMiddleware.md)\<`IncomingEventType`, `OutgoingResponseType`, `KernelContextType`\>

#### Defined in

[src/middleware/KernelHandlerMiddleware.ts:39](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/middleware/KernelHandlerMiddleware.ts#L39)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<`OutgoingResponseType`\>

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

• **context**: `KernelContextType`

The kernel context containing the incoming event and other data.

• **next**: `NextPipe`\<`KernelContextType`, `OutgoingResponseType`\>

The next middleware in the pipeline.

#### Returns

`Promise`\<`OutgoingResponseType`\>

A promise that resolves to the outgoing response after processing.

#### Throws

If no router or event handler is provided.

#### Defined in

[src/middleware/KernelHandlerMiddleware.ts:53](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/middleware/KernelHandlerMiddleware.ts#L53)
