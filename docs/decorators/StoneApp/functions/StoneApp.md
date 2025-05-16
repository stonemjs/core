[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/StoneApp](../README.md) / StoneApp

# Function: StoneApp()

> **StoneApp**\<`T`\>(`options`, `blueprints`): `ClassDecorator`

Defined in: [decorators/StoneApp.ts:30](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/decorators/StoneApp.ts#L30)

StoneApp decorator to mark a class as the main application entry point.

This decorator is useful for customizing classes that should be treated as the primary entry point for the Stone.js framework.
It allows for configuring the main application settings via the provided options.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

[`StoneAppOptions`](../interfaces/StoneAppOptions.md) = `{}`

The configuration options for the application, based on StoneOptions.

### blueprints

(`Record`\<`string`, `any`\> \| [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>)[] = `[]`

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
