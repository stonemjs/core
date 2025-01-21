[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Middleware](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Defined in: [decorators/Middleware.ts:10](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Middleware.ts#L10)

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### global?

> `optional` **global**: `boolean`

Defined in: [decorators/Middleware.ts:24](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Middleware.ts#L24)

Set as Kernel middleware

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [decorators/Middleware.ts:14](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Middleware.ts#L14)

The params to pass to the middleware.

***

### priority?

> `optional` **priority**: `number`

Defined in: [decorators/Middleware.ts:19](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Middleware.ts#L19)

The execution priority of the middleware.
