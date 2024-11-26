[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Middleware](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### global?

> `optional` **global**: `boolean`

Set as Kernel middleware

#### Defined in

[src/decorators/Middleware.ts:24](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Middleware.ts#L24)

***

### params?

> `optional` **params**: `unknown`[]

The params to pass to the middleware.

#### Defined in

[src/decorators/Middleware.ts:14](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Middleware.ts#L14)

***

### priority?

> `optional` **priority**: `number`

The execution priority of the middleware.

#### Defined in

[src/decorators/Middleware.ts:19](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Middleware.ts#L19)

***

### type?

> `optional` **type**: `"event"` \| `"response"` \| `"terminate"`

The type of the middleware, determining its purpose (e.g., input, output, terminate).

#### Defined in

[src/decorators/Middleware.ts:29](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Middleware.ts#L29)
