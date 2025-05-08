[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Middleware](../README.md) / Middleware

# Function: Middleware()

> **Middleware**\<`T`\>(`options`): `ClassDecorator`

Defined in: [core/src/decorators/Middleware.ts:54](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Middleware.ts#L54)

Middleware decorator to mark a class as middleware within the Stone.js framework.

This decorator is used to customize classes as middleware, allowing them to be registered and managed
as part of the request/response lifecycle or other layers such as adapter, kernel, or router.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`MiddlewareOptions`](../interfaces/MiddlewareOptions.md) = `{}`

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
