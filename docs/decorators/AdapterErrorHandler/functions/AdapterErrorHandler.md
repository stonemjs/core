[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/AdapterErrorHandler](../README.md) / AdapterErrorHandler

# Function: AdapterErrorHandler()

> **AdapterErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/AdapterErrorHandler.ts:19](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/AdapterErrorHandler.ts#L19)

AdapterErrorHandler decorator to set imperative configuration.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`AdapterErrorHandlerOptions`](../../../declarations/interfaces/AdapterErrorHandlerOptions.md)

The AdapterErrorHandler options.

## Returns

`ClassDecorator`

A class decorator function that sets the metadata using the provided options.

## Example

```typescript
@AdapterErrorHandler({ error: ['Error', 'RuntimeError'] })
class MyClass {
  // ...
}
```
