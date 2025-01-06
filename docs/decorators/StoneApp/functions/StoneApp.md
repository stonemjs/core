[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneApp

# Function: StoneApp()

> **StoneApp**\<`T`\>(`options`, `blueprints`): `ClassDecorator`

Defined in: [src/decorators/StoneApp.ts:30](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/decorators/StoneApp.ts#L30)

StoneApp decorator to mark a class as the main application entry point.

This decorator is useful for customizing classes that should be treated as the primary entry point for the Stone.js framework.
It allows for configuring the main application settings via the provided options.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

### options

[`StoneAppOptions`](../interfaces/StoneAppOptions.md) = `{}`

The configuration options for the application, based on StoneOptions.

### blueprints

[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)[] = `[]`

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@StoneApp({ name: 'MyApplication', env: Environment.Development })
class MyApp {
  // Application logic here.
}
```
