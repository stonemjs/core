[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [decorators/ConfigMiddleware](../README.md) / ConfigMiddleware

# Function: ConfigMiddleware()

> **ConfigMiddleware**\<`T`\>(`options`): (`target`, `context`) => `void`

ConfigMiddleware decorator to mark a class as middleware within the Stone.js framework.

This decorator is used to customize classes as middleware, allowing them to be registered and managed
as part of the request/response lifecycle or other layers such as adapter, kernel, or router.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`ConfigMiddlewareOptions`](../interfaces/ConfigMiddlewareOptions.md) = `{}`

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
@ConfigMiddleware({ priority: 1, singleton: true })
class MyMiddleware {
  // ConfigMiddleware class logic here.
}
```

## Defined in

[src/decorators/ConfigMiddleware.ts:39](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/decorators/ConfigMiddleware.ts#L39)
