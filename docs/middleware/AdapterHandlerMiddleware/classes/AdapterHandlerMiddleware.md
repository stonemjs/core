[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [middleware/AdapterHandlerMiddleware](../README.md) / AdapterHandlerMiddleware

# Class: AdapterHandlerMiddleware\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, DestinationType, AdapterContextType\>

Class representing the AdapterHandlerMiddleware.

This middleware is responsible for processing incoming events and generating outgoing responses.
It interacts with the lifecycle event handlers and manages the flow of incoming and outgoing events.

## Type Parameters

• **RawEventType**

The type of the raw event.

• **RawResponseType**

The type of the raw response.

• **ExecutionContextType**

The type of the execution context.

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

The type of the incoming event, extending IncomingEvent.

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

The type of incoming event options, extending IncomingEventOptions.

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

The type of the outgoing response, extending OutgoingResponse.

• **DestinationType** *extends* [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\> = [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>

The type of the destination response wrapper, default is IRawResponseWrapper.

• **AdapterContextType** *extends* [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\> = [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

The type of adapter context, default is AdapterContext.

## Constructors

### new AdapterHandlerMiddleware()

> **new AdapterHandlerMiddleware**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`, `AdapterContextType`\>(`options`): [`AdapterHandlerMiddleware`](AdapterHandlerMiddleware.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`, `AdapterContextType`\>

Constructor for the AdapterHandlerMiddleware.

#### Parameters

• **options**

Options for creating the AdapterHandlerMiddleware.

• **options.eventHandler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Returns

[`AdapterHandlerMiddleware`](AdapterHandlerMiddleware.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`, `AdapterContextType`\>

#### Defined in

[src/middleware/AdapterHandlerMiddleware.ts:42](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/middleware/AdapterHandlerMiddleware.ts#L42)

## Methods

### handle()

> **handle**(`context`, `next`): `Promise`\<`DestinationType`\>

Handles the incoming event, processes it, and invokes the next middleware in the pipeline.

#### Parameters

• **context**: `AdapterContextType`

The adapter context containing the raw event, execution context, and other data.

• **next**: `NextPipe`\<`AdapterContextType`, `DestinationType`\>

The next middleware to be invoked in the pipeline.

#### Returns

`Promise`\<`DestinationType`\>

A promise that resolves to the destination type after processing.

#### Throws

If required components such as the incomingEventResolver or IncomingEventBuilder are not provided.

#### Defined in

[src/middleware/AdapterHandlerMiddleware.ts:55](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/middleware/AdapterHandlerMiddleware.ts#L55)
