[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Provider](../README.md) / Provider

# Function: Provider()

> **Provider**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Provider.ts:34](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/Provider.ts#L34)

Provider decorator to mark a class as a ServiceProvider and automatically bind its services to the container.

This decorator is useful for marking classes as service providers within the Stone.js framework,
allowing them to manage and provide their services to the service container.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ProviderOptions`](../interfaces/ProviderOptions.md) = `{}`

The configuration options for the provider.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Provider({ singleton: true })
class MyServiceProvider {
  // Service provider logic here.
}
```
