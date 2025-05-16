[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Configuration](../README.md) / Configuration

# Function: Configuration()

> **Configuration**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Configuration.ts:36](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/decorators/Configuration.ts#L36)

Configuration decorator to set imperative configuration.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

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
MyConfiguration {
 configure (blueprint): void | Promise<void> {
   blueprint.set('name.name', {})
 }
}
```
