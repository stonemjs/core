[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/AdapterConfig](../README.md) / AdapterConfig

# Interface: AdapterConfig

Adapter config.

This object defines the configuration options for the adapter.
It includes settings for the adapter's URL, alias, current status, server configuration,
and other related properties for managing the adapter's behavior.

## Properties

### alias

> **alias**: `string`

The alias name for the adapter.
This is a unique identifier for the adapter.

#### Defined in

[src/options/AdapterConfig.ts:33](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L33)

***

### current?

> `optional` **current**: `boolean`

The current version or status identifier for the adapter.

#### Defined in

[src/options/AdapterConfig.ts:50](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L50)

***

### default?

> `optional` **default**: `boolean`

Defines if this is the default adapter.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:56](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L56)

***

### hooks

> **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/options/AdapterConfig.ts:45](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L45)

***

### middleware

> **middleware**: [`AdapterMiddlewareConfig`](AdapterMiddlewareConfig.md)

The middleware used for processing data in the mapper.

#### Defined in

[src/options/AdapterConfig.ts:43](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L43)

***

### preferred?

> `optional` **preferred**: `boolean`

Indicates if the adapter is preferred over others.
Optional property.

#### Defined in

[src/options/AdapterConfig.ts:62](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L62)

***

### resolver

> **resolver**: [`AdapterResolver`](../../../definitions/type-aliases/AdapterResolver.md)

The class type of the adapter, used to create instances.

#### Defined in

[src/options/AdapterConfig.ts:38](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/options/AdapterConfig.ts#L38)
