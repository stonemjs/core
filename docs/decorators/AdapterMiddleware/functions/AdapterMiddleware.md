[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [decorators/AdapterMiddleware](../README.md) / AdapterMiddleware

# Function: AdapterMiddleware()

> **AdapterMiddleware**\<`T`\>(`options`): (`target`, `context`) => `void`

AdapterMiddleware decorator to mark a class as middleware within the Stone.js framework.

This decorator is used to customize classes as middleware, allowing them to be registered and managed
as part of the request/response lifecycle or other layers such as adapter, kernel, or router.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`AdapterMiddlewareOptions`](../interfaces/AdapterMiddlewareOptions.md) = `{}`

The configuration options for the middleware, including platform, priority, singleton registration, alias, layer, and type.

## Returns

`Function`

A decorator function to set metadata on the target class.

### Parameters

• **target**: `T`

• **context**: `ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
@AdapterMiddleware({ priority: 1, singleton: true })
class MyMiddleware {
  // AdapterMiddleware class logic here.
}
```

## Defined in

[src/decorators/AdapterMiddleware.ts:44](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/decorators/AdapterMiddleware.ts#L44)
