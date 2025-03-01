[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [core/src/decorators/AdapterMiddleware.ts:10](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/AdapterMiddleware.ts#L10)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [core/src/decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/AdapterMiddleware.ts#L24)

The platform name for which the middleware is used.

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [core/src/decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/AdapterMiddleware.ts#L14)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [core/src/decorators/AdapterMiddleware.ts:29](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/AdapterMiddleware.ts#L29)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [core/src/decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/AdapterMiddleware.ts#L19)

The execution priority of the middleware.
