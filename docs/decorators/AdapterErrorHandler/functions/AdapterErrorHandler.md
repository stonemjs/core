[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/AdapterErrorHandler](../README.md) / AdapterErrorHandler

# Function: AdapterErrorHandler()

> **AdapterErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/AdapterErrorHandler.ts:31](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/AdapterErrorHandler.ts#L31)

AdapterErrorHandler decorator to set imperative configuration.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`AdapterErrorHandlerOptions`](../interfaces/AdapterErrorHandlerOptions.md)

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
