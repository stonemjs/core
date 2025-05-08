[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/AdapterErrorHandler](../README.md) / AdapterErrorHandler

# Function: AdapterErrorHandler()

> **AdapterErrorHandler**\<`T`\>(`options`): `ClassDecorator`

Defined in: [core/src/decorators/AdapterErrorHandler.ts:31](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/AdapterErrorHandler.ts#L31)

AdapterErrorHandler decorator to set imperative configuration.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

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
