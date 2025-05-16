[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MiddlewareOptions

# Interface: MiddlewareOptions

Defined in: [declarations.ts:231](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L231)

Middleware options.

This interface defines the configuration options for marking a class as middleware.

## Properties

### alias?

> `optional` **alias**: `string` \| `string`[]

Defined in: [declarations.ts:240](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L240)

The alias of the middleware.

***

### global?

> `optional` **global**: `boolean`

Defined in: [declarations.ts:255](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L255)

Set as Kernel middleware

***

### params?

> `optional` **params**: `unknown`[]

Defined in: [declarations.ts:245](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L245)

The params to pass to the middleware.

***

### priority?

> `optional` **priority**: `number`

Defined in: [declarations.ts:250](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L250)

The execution priority of the middleware.

***

### singleton?

> `optional` **singleton**: `boolean`

Defined in: [declarations.ts:235](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L235)

Whether the middleware should be treated as a singleton.
