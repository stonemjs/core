[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

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

[src/options/AdapterConfig.ts:40](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L40)

***

### current?

> `optional` **current**: `boolean`

The current status identifier for the adapter.
Used to indicate if this adapter instance is active or currently in use.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:47](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L47)

***

### default?

> `optional` **default**: `boolean`

Defines whether this adapter is the default adapter used by the application.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:53](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L53)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

Hooks that provide additional behavior during specific lifecycle events of the adapter.
These hooks can be used to extend the adapter's functionality at various points.

#### Defined in

[src/options/AdapterConfig.ts:33](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L33)

***

### middleware

> **middleware**: `MixedPipe`[]

The middleware used for processing incoming or outgoing data in the adapter.
Middleware can modify or handle events at different stages of the adapter's lifecycle.

#### Defined in

[src/options/AdapterConfig.ts:27](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L27)

***

### platform

> **platform**: `string`

The platform identifier for the adapter.
This is used to categorize the adapter based on the environment or technology it supports.

#### Defined in

[src/options/AdapterConfig.ts:16](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L16)

***

### preferred?

> `optional` **preferred**: `boolean`

Indicates if this adapter is preferred over others.
Useful for prioritizing adapters in environments where multiple are available.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:60](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L60)

***

### resolver

> **resolver**: [`AdapterResolver`](../../../definitions/type-aliases/AdapterResolver.md)

The class type resolver used to create instances of the adapter.

#### Defined in

[src/options/AdapterConfig.ts:21](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/options/AdapterConfig.ts#L21)
