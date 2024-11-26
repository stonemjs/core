[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Configuration](../README.md) / Configuration

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

[src/decorators/Configuration.ts:31](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Configuration.ts#L31)
