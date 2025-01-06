[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

# Interface: AdapterOptions\<IncomingEventType, OutgoingResponseType\>

Defined in: [src/adapter/Adapter.ts:29](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/adapter/Adapter.ts#L29)

Adapter options.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

Defined in: [src/adapter/Adapter.ts:35](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/adapter/Adapter.ts#L35)

***

### handlerResolver

> **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [src/adapter/Adapter.ts:36](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/adapter/Adapter.ts#L36)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

Defined in: [src/adapter/Adapter.ts:34](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/adapter/Adapter.ts#L34)

***

### logger

> **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

Defined in: [src/adapter/Adapter.ts:33](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/adapter/Adapter.ts#L33)
