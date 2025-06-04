[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterMiddlewareOptions

# Interface: AdapterMiddlewareOptions

Defined in: [declarations.ts:163](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L163)

AdapterMiddleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### adapterAlias?

> `optional` **adapterAlias**: `string`

Defined in: [declarations.ts:177](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L177)

The alias name for which the middleware is used.

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [declarations.ts:167](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L167)

The params to pass to the middleware.

***

### platform?

> `optional` **platform**: `string`

Defined in: [declarations.ts:182](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L182)

The platform name for which the middleware is used.

***

### priority?

> `optional` **priority**: `number`

Defined in: [declarations.ts:172](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L172)

The execution priority of the middleware.
