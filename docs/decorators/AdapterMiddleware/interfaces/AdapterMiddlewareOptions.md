[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [src/decorators/AdapterMiddleware.ts:10](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/AdapterMiddleware.ts#L10)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### params?

> `optional` **params**: `unknown`[]

Defined in: [src/decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/AdapterMiddleware.ts#L14)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [src/decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/AdapterMiddleware.ts#L24)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [src/decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/AdapterMiddleware.ts#L19)

The execution priority of the middleware.
