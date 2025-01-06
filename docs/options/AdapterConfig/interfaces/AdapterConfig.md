[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig

Defined in: [src/options/AdapterConfig.ts:11](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L11)

AdapterConfig Interface.

This interface defines the configuration options for an adapter within the Stone.js framework.
It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [src/options/AdapterConfig.ts:46](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L46)

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

***

### current?

> `optional` **current**: `boolean`

Defined in: [src/options/AdapterConfig.ts:53](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L53)

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

***

### default?

> `optional` **default**: `boolean`

Defined in: [src/options/AdapterConfig.ts:59](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L59)

Defines whether this adapter is the default adapter used by the application.
Optional property.

***

### errorHandlers

> **errorHandlers**: `Record`\<`string`, (...`args`) => [`IAdapterErrorHandler`](../../../definitions/interfaces/IAdapterErrorHandler.md)\<`any`, `any`, `any`\>\>

Defined in: [src/options/AdapterConfig.ts:39](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L39)

Error handlers used to manage and report errors that occur within the adapter.
These handlers can be used to customize error handling behavior and logging.

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

Defined in: [src/options/AdapterConfig.ts:33](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L33)

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

***

### middleware

> **middleware**: `MixedPipe`[]

Defined in: [src/options/AdapterConfig.ts:27](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L27)

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

***

### platform

> **platform**: `string`

Defined in: [src/options/AdapterConfig.ts:16](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L16)

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

***

### resolver

> **resolver**: [`AdapterResolver`](../../../definitions/type-aliases/AdapterResolver.md)

Defined in: [src/options/AdapterConfig.ts:21](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/options/AdapterConfig.ts#L21)

The class type resolver used to create instances of the adapter.
