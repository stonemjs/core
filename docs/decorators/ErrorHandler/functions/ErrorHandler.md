[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/ErrorHandler](../README.md) / ErrorHandler

# Function: ErrorHandler()

> **ErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [core/src/decorators/ErrorHandler.ts:31](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/decorators/ErrorHandler.ts#L31)

ErrorHandler decorator to set imperative configuration.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

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
