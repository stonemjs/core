[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / AdapterOptions

# Interface: AdapterOptions\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/adapter/Adapter.ts:33](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/adapter/Adapter.ts#L33)

Adapter options.

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

Defined in: [core/src/adapter/Adapter.ts:39](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/adapter/Adapter.ts#L39)

***

### handlerResolver

> **handlerResolver**: [`AdapterEventHandlerResolver`](../../../declarations/type-aliases/AdapterEventHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:40](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/adapter/Adapter.ts#L40)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

Defined in: [core/src/adapter/Adapter.ts:38](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/adapter/Adapter.ts#L38)

***

### logger

> **logger**: [`ILogger`](../../../declarations/interfaces/ILogger.md)

Defined in: [core/src/adapter/Adapter.ts:37](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/adapter/Adapter.ts#L37)
