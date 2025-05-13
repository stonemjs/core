[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [decorators/AdapterMiddleware.ts:10](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L10)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### adapterAlias?

> `optional` **adapterAlias**: `string`

Defined in: [decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L24)

The platform name for which the middleware is used.

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L14)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [decorators/AdapterMiddleware.ts:29](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L29)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L19)

The execution priority of the middleware.
