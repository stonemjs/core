[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig

AdapterConfig Interface.

This interface defines the configuration options for an adapter within the Stone.js framework.
It includes settings for the adapter's alias, resolver, middleware, and hooks, among other properties.
The AdapterConfig allows developers to manage how the adapter behaves and how it integrates with the application.

## Properties

### alias?

> `optional` **alias**: `string`

The alias name for the adapter.
This is a unique identifier used to reference the adapter.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:46](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L46)

***

### current?

> `optional` **current**: `boolean`

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:53](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L53)

***

### default?

> `optional` **default**: `boolean`

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:59](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L59)

***

### errorHandler

> **errorHandler**: [`ErrorHandlerConfig`](../../ErrorHandlerConfig/interfaces/ErrorHandlerConfig.md)\<`unknown`\>

Logging settings, including the logger instance and error reporting configurations.

#### Defined in

[src/options/AdapterConfig.ts:39](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L39)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

#### Defined in

[src/options/AdapterConfig.ts:34](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L34)

***

### middleware

> **middleware**: `MixedPipe`[]

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Defined in

[src/options/AdapterConfig.ts:28](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L28)

***

### platform

> **platform**: `string`

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Defined in

[src/options/AdapterConfig.ts:17](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L17)

***

### preferred?

> `optional` **preferred**: `boolean`

Indicates if this adapter is preferred over others.
Useful for prioritizing adapters in environments where multiple are available.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:66](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L66)

***

### resolver

> **resolver**: [`AdapterResolver`](../../../definitions/type-aliases/AdapterResolver.md)

The class type resolver used to create instances of the adapter.

#### Defined in

[src/options/AdapterConfig.ts:22](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/options/AdapterConfig.ts#L22)
