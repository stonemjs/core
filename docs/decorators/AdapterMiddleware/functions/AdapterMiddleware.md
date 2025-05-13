[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddleware

# Function: AdapterMiddleware()

> **AdapterMiddleware**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/AdapterMiddleware.ts:49](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterMiddleware.ts#L49)

AdapterMiddleware decorator to mark a class as middleware within the Stone.js framework.

This decorator is used to customize classes as middleware, allowing them to be registered and managed
as part of the request/response lifecycle or other layers such as adapter, kernel, or router.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`AdapterMiddlewareOptions`](../interfaces/AdapterMiddlewareOptions.md) = `{}`

The configuration options for the middleware, including platform, priority, singleton registration, alias, layer, and type.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@AdapterMiddleware({ priority: 1, singleton: true })
class MyMiddleware {
  // AdapterMiddleware class logic here.
}
```
