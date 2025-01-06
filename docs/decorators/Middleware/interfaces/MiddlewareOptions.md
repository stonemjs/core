[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Middleware](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Defined in: [src/decorators/Middleware.ts:10](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Middleware.ts#L10)

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### global?

> `optional` **global**: `boolean`

Defined in: [src/decorators/Middleware.ts:24](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Middleware.ts#L24)

Set as Kernel middleware

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [src/decorators/Middleware.ts:14](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Middleware.ts#L14)

The params to pass to the middleware.

***

### priority?

> `optional` **priority**: `number`

Defined in: [src/decorators/Middleware.ts:19](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Middleware.ts#L19)

The execution priority of the middleware.
