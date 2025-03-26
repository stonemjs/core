[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Middleware](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Defined in: [core/src/decorators/Middleware.ts:10](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L10)

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [core/src/decorators/Middleware.ts:19](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L19)

The alias of the middleware.

***

### global?

> `optional` **global**: `boolean`

Defined in: [core/src/decorators/Middleware.ts:34](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L34)

Set as Kernel middleware

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [core/src/decorators/Middleware.ts:24](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L24)

The params to pass to the middleware.

***

### priority?

> `optional` **priority**: `number`

Defined in: [core/src/decorators/Middleware.ts:29](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L29)

The execution priority of the middleware.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [core/src/decorators/Middleware.ts:14](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/decorators/Middleware.ts#L14)

Whether the middleware should be treated as a singleton.
