[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [decorators/StoneApp](../README.md) / StoneApp

# Function: StoneApp()

> **StoneApp**\<`T`\>(`options`, `blueprints`): (`target`, `context`) => `void`

StoneApp decorator to mark a class as the main application entry point.

This decorator is useful for customizing classes that should be treated as the primary entry point for the Stone.js framework.
It allows for configuring the main application settings via the provided options.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: [`StoneAppOptions`](../interfaces/StoneAppOptions.md) = `{}`

The configuration options for the application, based on StoneOptions.

• **blueprints**: [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>[] = `[]`

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
@StoneApp({ name: 'MyApplication', env: Environment.Development })
class MyApp {
  // Application logic here.
}
```

## Defined in

[src/decorators/StoneApp.ts:30](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/decorators/StoneApp.ts#L30)
