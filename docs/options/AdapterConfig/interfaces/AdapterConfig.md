[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig\<RawEventType, RawResponseType, ExecutionContextType, ResponseBuilderType\>

Defined in: [core/src/options/AdapterConfig.ts:11](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L11)

AdapterConfig Interface.

This interface defines the configuration options for an adapter within the Stone.js framework.
It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.

## Type Parameters

• **RawEventType** = `any`

• **RawResponseType** = `any`

• **ExecutionContextType** = `any`

• **ResponseBuilderType** = `any`

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [core/src/options/AdapterConfig.ts:51](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L51)

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

***

### current?

> `optional` **current**: `boolean`

Defined in: [core/src/options/AdapterConfig.ts:58](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L58)

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

***

### default?

> `optional` **default**: `boolean`

Defined in: [core/src/options/AdapterConfig.ts:64](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L64)

Defines whether this adapter is the default adapter used by the application.
Optional property.

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, [`MetaAdapterErrorHandler`](../../../declarations/interfaces/MetaAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>\>

Defined in: [core/src/options/AdapterConfig.ts:38](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L38)

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

***

### hooks?

> `optional` **hooks**: [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

Defined in: [core/src/options/AdapterConfig.ts:44](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L44)

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

***

### middleware

> **middleware**: `MixedPipe`\<`ExecutionContextType`, `ResponseBuilderType`\>[]

Defined in: [core/src/options/AdapterConfig.ts:32](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L32)

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

***

### platform

> **platform**: `string`

Defined in: [core/src/options/AdapterConfig.ts:21](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L21)

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

***

### resolver

> **resolver**: [`AdapterResolver`](../../../declarations/type-aliases/AdapterResolver.md)

Defined in: [core/src/options/AdapterConfig.ts:26](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/options/AdapterConfig.ts#L26)

The class type resolver used to create instances of the adapter.
