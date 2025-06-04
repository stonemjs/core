[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Middleware](../README.md) / Middleware

# Function: Middleware()

> **Middleware**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Middleware.ts:22](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Middleware.ts#L22)

Middleware decorator to mark a class as middleware within the Stone.js framework.

This decorator is used to customize classes as middleware, allowing them to be registered and managed
as part of the request/response lifecycle or other layers such as adapter, kernel, or router.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`MiddlewareOptions`](../../../declarations/interfaces/MiddlewareOptions.md) = `{}`

The configuration options for the middleware, including platform, priority, singleton registration, alias, layer, and type.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Middleware({ params: ['node'], priority: 1, global: true, alias: 'MyMiddleware' })
class MyMiddleware {
  // Middleware class logic here.
}
```
