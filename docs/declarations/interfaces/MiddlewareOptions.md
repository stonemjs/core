[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Defined in: [declarations.ts:236](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L236)

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [declarations.ts:245](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L245)

The alias of the middleware.

***

### global?

> `optional` **global**: `boolean`

Defined in: [declarations.ts:260](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L260)

Set as Kernel middleware

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [declarations.ts:250](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L250)

The params to pass to the middleware.

***

### priority?

> `optional` **priority**: `number`

Defined in: [declarations.ts:255](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L255)

The execution priority of the middleware.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [declarations.ts:240](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L240)

Whether the middleware should be treated as a singleton.
