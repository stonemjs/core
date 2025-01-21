[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Configuration](../README.md) / Configuration

# Function: Configuration()

> **Configuration**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Configuration.ts:31](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Configuration.ts#L31)

Configuration decorator to set imperative configuration.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`ConfigurationOptions`](../interfaces/ConfigurationOptions.md) = `{}`

The configuration options.

## Returns

`ClassDecorator`

A class decorator function that sets the metadata using the provided options.

## Example

```typescript
@Configuration()
class MyClass {
  // ...
}
```
