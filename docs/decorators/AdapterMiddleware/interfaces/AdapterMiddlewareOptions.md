[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [core/src/decorators/AdapterMiddleware.ts:10](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/AdapterMiddleware.ts#L10)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### alias?

> `optional` **alias**: `string`

Defined in: [core/src/decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/AdapterMiddleware.ts#L24)

The platform name for which the middleware is used.

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [core/src/decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/AdapterMiddleware.ts#L14)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [core/src/decorators/AdapterMiddleware.ts:29](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/AdapterMiddleware.ts#L29)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [core/src/decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/AdapterMiddleware.ts#L19)

The execution priority of the middleware.
