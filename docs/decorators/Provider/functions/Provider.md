[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Provider](../README.md) / Provider

# Function: Provider()

> **Provider**\<`T`\>(`options`): (`target`, `context`) => `void`

Provider decorator to mark a class as a ServiceProvider and automatically bind its services to the container.

This decorator is useful for marking classes as service providers within the Stone.js framework,
allowing them to manage and provide their services to the service container.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`ProviderOptions`](../interfaces/ProviderOptions.md) = `{}`

The configuration options for the provider.

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
@Provider({ singleton: true })
class MyServiceProvider {
  // Service provider logic here.
}
```

## Defined in

[src/decorators/Provider.ts:34](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Provider.ts#L34)
