[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [src/decorators/ErrorHandler.ts:31](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/decorators/ErrorHandler.ts#L31)

ErrorHandler decorator to set imperative configuration.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

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
