[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

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

[src/adapter/Adapter.ts:37](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L37)

***

### errorHandler

> **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:38](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L38)

***

### handlerResolver

> **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:57](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L57)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:36](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L36)

***

### inputMapper

> **inputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `IncomingEventType`\>

#### Defined in

[src/adapter/Adapter.ts:39](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L39)

***

### logger

> **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:35](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L35)

***

### outputMapper

> **outputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

#### Defined in

[src/adapter/Adapter.ts:48](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/Adapter.ts#L48)
