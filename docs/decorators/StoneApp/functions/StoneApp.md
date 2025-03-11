[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneApp

# Function: StoneApp()

> **StoneApp**\<`T`\>(`options`, `blueprints`): `ClassDecorator`

Defined in: [core/src/decorators/StoneApp.ts:30](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/decorators/StoneApp.ts#L30)

StoneApp decorator to mark a class as the main application entry point.

This decorator is useful for customizing classes that should be treated as the primary entry point for the Stone.js framework.
It allows for configuring the main application settings via the provided options.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`StoneAppOptions`](../interfaces/StoneAppOptions.md) = `{}`

The configuration options for the application, based on StoneOptions.

### blueprints

(`Record`\<`string`, `any`\> \| [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md))[] = `[]`

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
