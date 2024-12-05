[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Middleware](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### global?

> `optional` **global**: `boolean`

Set as Kernel middleware

#### Defined in

[src/decorators/Middleware.ts:24](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Middleware.ts#L24)

***

### params?

> `optional` **params**: `unknown`[]

The params to pass to the middleware.

#### Defined in

[src/decorators/Middleware.ts:14](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Middleware.ts#L14)

***

### priority?

> `optional` **priority**: `number`

The execution priority of the middleware.

#### Defined in

[src/decorators/Middleware.ts:19](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Middleware.ts#L19)
