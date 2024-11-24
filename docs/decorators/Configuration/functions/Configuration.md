[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Configuration](../README.md) / Configuration

# Function: Configuration()

> **Configuration**\<`T`\>(`options`): (`_`, `context`) => `void`

Configuration decorator to set imperative configuration.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`ConfigurationOptions`](../interfaces/ConfigurationOptions.md) = `{}`

The configuration options.

## Returns

`Function`

A class decorator function that sets the metadata using the provided options.

### Parameters

• **\_**: `T`

• **context**: `ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Example

```typescript
@Configuration()
class MyClass {
  // ...
}
```

## Defined in

[src/decorators/Configuration.ts:31](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Configuration.ts#L31)
