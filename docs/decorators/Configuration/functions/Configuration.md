[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Configuration](../README.md) / Configuration

# Function: Configuration()

> **Configuration**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Configuration.ts:36](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Configuration.ts#L36)

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
