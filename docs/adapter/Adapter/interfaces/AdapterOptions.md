[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

# Interface: AdapterOptions\<RawResponseType, IncomingEventType, OutgoingResponseType\>

Adapter options.

## Type Parameters

• **RawResponseType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/Adapter.ts:33](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/adapter/Adapter.ts#L33)

***

### errorHandler

> **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`, [`RuntimeError`](../../../errors/RuntimeError/classes/RuntimeError.md)\>

#### Defined in

[src/adapter/Adapter.ts:34](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/adapter/Adapter.ts#L34)

***

### handlerResolver

> **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:35](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/adapter/Adapter.ts#L35)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:32](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/adapter/Adapter.ts#L32)

***

### logger

> **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:31](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/adapter/Adapter.ts#L31)
