[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [options/AdapterConfig.ts:18](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L18)

AdapterConfig Interface.

This interface defines the configuration options for an adapter within the Stone.js framework.
It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.

## Type Parameters

### RawEventType

`RawEventType` = `any`

### RawResponseType

`RawResponseType` = `any`

### ExecutionContextType

`ExecutionContextType` = `any`

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### IncomingEventOptionsType

`IncomingEventOptionsType` *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md) = [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [options/AdapterConfig.ts:72](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L72)

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

***

### current?

> `optional` **current**: `boolean`

Defined in: [options/AdapterConfig.ts:79](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L79)

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

***

### default?

> `optional` **default**: `boolean`

Defined in: [options/AdapterConfig.ts:85](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L85)

Defines whether this adapter is the default adapter used by the application.
Optional property.

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, [`MetaAdapterErrorHandler`](../../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>\>

Defined in: [options/AdapterConfig.ts:65](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L65)

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

***

### eventHandlerResolver

> **eventHandlerResolver**: [`AdapterEventHandlerResolver`](../../../declarations/type-aliases/AdapterEventHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [options/AdapterConfig.ts:59](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L59)

The event handler resolver used to create instances of the event handler.

***

### middleware

> **middleware**: [`AdapterMixedPipeType`](../../../declarations/type-aliases/AdapterMixedPipeType.md)\<[`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>, `RawResponseType`\>[]

Defined in: [options/AdapterConfig.ts:47](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L47)

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

***

### platform

> **platform**: `string`

Defined in: [options/AdapterConfig.ts:30](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L30)

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

***

### resolver

> **resolver**: [`AdapterResolver`](../../../declarations/type-aliases/AdapterResolver.md)

Defined in: [options/AdapterConfig.ts:41](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L41)

The class type resolver used to create instances of the adapter.

***

### variant

> **variant**: `"server"` \| `"browser"` \| `"console"`

Defined in: [options/AdapterConfig.ts:36](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/AdapterConfig.ts#L36)

The class type of the adapter.
This is used to identify the category of the adapter.
