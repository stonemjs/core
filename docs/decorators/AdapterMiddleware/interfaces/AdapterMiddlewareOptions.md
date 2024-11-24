[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### params?

> `optional` **params**: `unknown`[]

The params to pass to the middleware.

#### Defined in

[src/decorators/AdapterMiddleware.ts:14](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/AdapterMiddleware.ts#L14)

***

### platform?

> `optional` **platform**: `string`

The platform name for which the middleware is used.

#### Defined in

[src/decorators/AdapterMiddleware.ts:29](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/AdapterMiddleware.ts#L29)

***

### priority?

> `optional` **priority**: `number`

The execution priority of the middleware.

#### Defined in

[src/decorators/AdapterMiddleware.ts:19](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/AdapterMiddleware.ts#L19)

***

### type?

> `optional` **type**: `"input"` \| `"output"`

The middleware type.

#### Defined in

[src/decorators/AdapterMiddleware.ts:24](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/AdapterMiddleware.ts#L24)
