[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/ErrorHandler.ts:31](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/decorators/ErrorHandler.ts#L31)

ErrorHandler decorator to set imperative configuration.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ErrorHandlerOptions`](../interfaces/ErrorHandlerOptions.md)

The ErrorHandler options.

## Returns

`ClassDecorator`

A class decorator function that sets the metadata using the provided options.

## Example

```typescript
@ErrorHandler({ error: ['Error', 'RuntimeError'] })
class MyClass {
  // ...
}
```
