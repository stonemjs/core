[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineMiddleware

# Function: defineMiddleware()

Defines middleware (function, factory, or class) for the Stone.js kernel.

This utility injects middleware metadata into the `stone.kernel.middleware` blueprint field.
It supports functional, factory, and class-based middleware.

## Param

The middleware implementation (function, factory, or class).

## Param

Optional middleware options and factory indicator.

## Example

```ts
defineMiddleware((event, next) => next(event))
```

## Call Signature

> **defineMiddleware**\<`U`, `V`\>(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

Defined in: [blueprint/KernelUtils.ts:273](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/KernelUtils.ts#L273)

Defines a function-based middleware.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FunctionalMiddleware`](../../../declarations/type-aliases/FunctionalMiddleware.md)\<`U`, `V`\>

The middleware function to be registered.

#### options?

[`MiddlewareOptions`](../../../declarations/interfaces/MiddlewareOptions.md)

Optional middleware options.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

A partial StoneBlueprint with the middleware metadata.

### Param

The middleware implementation (function, factory, or class).

### Param

Optional middleware options and factory indicator.

### Example

```ts
defineMiddleware((event, next) => next(event))
```

## Call Signature

> **defineMiddleware**\<`U`, `V`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

Defined in: [blueprint/KernelUtils.ts:285](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/KernelUtils.ts#L285)

Defines a factory-based middleware.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`FactoryMiddleware`](../../../declarations/type-aliases/FactoryMiddleware.md)\<`U`, `V`\>

A factory that returns the middleware function.

#### options

[`MiddlewareOptions`](../../../declarations/interfaces/MiddlewareOptions.md) & `object`

Middleware options including `isFactory: true`.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

A partial StoneBlueprint with the middleware metadata.

### Param

The middleware implementation (function, factory, or class).

### Param

Optional middleware options and factory indicator.

### Example

```ts
defineMiddleware((event, next) => next(event))
```

## Call Signature

> **defineMiddleware**\<`U`, `V`\>(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

Defined in: [blueprint/KernelUtils.ts:297](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/blueprint/KernelUtils.ts#L297)

Defines a class-based middleware.

### Type Parameters

#### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

#### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### Parameters

#### module

[`MiddlewareClass`](../../../declarations/type-aliases/MiddlewareClass.md)\<`U`, `V`\>

A class-based middleware with a `handle` method.

#### options

[`MiddlewareOptions`](../../../declarations/interfaces/MiddlewareOptions.md) & `object`

Middleware options including `isFactory: false`.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>\>

A partial StoneBlueprint with the middleware metadata.

### Param

The middleware implementation (function, factory, or class).

### Param

Optional middleware options and factory indicator.

### Example

```ts
defineMiddleware((event, next) => next(event))
```
