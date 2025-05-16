[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/ErrorHandler.ts:19](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/decorators/ErrorHandler.ts#L19)

ErrorHandler decorator to set imperative configuration.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ErrorHandlerOptions`](../../../declarations/interfaces/ErrorHandlerOptions.md)

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
