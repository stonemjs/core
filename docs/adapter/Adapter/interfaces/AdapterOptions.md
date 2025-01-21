[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

# Interface: AdapterOptions\<IncomingEventType, OutgoingResponseType\>

Defined in: [adapter/Adapter.ts:29](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L29)

Adapter options.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

Defined in: [adapter/Adapter.ts:35](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L35)

***

### handlerResolver

> **handlerResolver**: [`AdapterHandlerResolver`](../../../declarations/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [adapter/Adapter.ts:36](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L36)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

Defined in: [adapter/Adapter.ts:34](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L34)

***

### logger

> **logger**: [`ILogger`](../../../declarations/interfaces/ILogger.md)

Defined in: [adapter/Adapter.ts:33](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L33)
