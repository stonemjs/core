[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [core/src/options/AdapterConfig.ts:18](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L18)

AdapterConfig Interface.

This interface defines the configuration options for an adapter within the Stone.js framework.
It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.

## Type Parameters

• **RawEventType** = `any`

• **RawResponseType** = `any`

• **ExecutionContextType** = `any`

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md) = [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [core/src/options/AdapterConfig.ts:66](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L66)

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

***

### current?

> `optional` **current**: `boolean`

Defined in: [core/src/options/AdapterConfig.ts:73](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L73)

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

***

### default?

> `optional` **default**: `boolean`

Defined in: [core/src/options/AdapterConfig.ts:79](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L79)

Defines whether this adapter is the default adapter used by the application.
Optional property.

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, [`MetaAdapterErrorHandler`](../../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>\>

Defined in: [core/src/options/AdapterConfig.ts:59](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L59)

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

***

### eventHandlerResolver

> **eventHandlerResolver**: [`AdapterEventHandlerResolver`](../../../declarations/type-aliases/AdapterEventHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/options/AdapterConfig.ts:53](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L53)

The event handler resolver used to create instances of the event handler.

***

### middleware

> **middleware**: [`AdapterMixedPipeType`](../../../declarations/type-aliases/AdapterMixedPipeType.md)\<[`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>, `RawResponseType`\>[]

Defined in: [core/src/options/AdapterConfig.ts:41](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L41)

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

***

### platform

> **platform**: `string`

Defined in: [core/src/options/AdapterConfig.ts:30](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L30)

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

***

### resolver

> **resolver**: [`AdapterResolver`](../../../declarations/type-aliases/AdapterResolver.md)

Defined in: [core/src/options/AdapterConfig.ts:35](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/options/AdapterConfig.ts#L35)

The class type resolver used to create instances of the adapter.
