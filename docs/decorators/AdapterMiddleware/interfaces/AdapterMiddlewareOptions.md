[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [decorators/AdapterMiddleware.ts:10](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/AdapterMiddleware.ts#L10)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### params?

> `optional` **params**: `unknown`[]

Defined in: [decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/AdapterMiddleware.ts#L14)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/AdapterMiddleware.ts#L24)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/AdapterMiddleware.ts#L19)

The execution priority of the middleware.
