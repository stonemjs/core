[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

# Interface: AdapterOptions\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Adapter options.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/Adapter.ts:38](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L38)

***

### errorHandler

> **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:39](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L39)

***

### handlerResolver

> **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:58](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L58)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:37](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L37)

***

### inputMapper

> **inputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `IncomingEventType`\>

#### Defined in

[src/adapter/Adapter.ts:40](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L40)

***

### logger

> **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:36](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L36)

***

### outputMapper

> **outputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

#### Defined in

[src/adapter/Adapter.ts:49](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/Adapter.ts#L49)
