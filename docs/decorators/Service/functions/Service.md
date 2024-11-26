[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Service](../README.md) / Service

# Function: Service()

> **Service**\<`T`\>(`options`): (`target`, `context`) => `void`

Service decorator to mark a class as a service and automatically bind it to the container.

This decorator is useful for marking classes that should be treated as services by the Stone.js framework,
making them easily injectable and manageable by the service container.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **options**: `Partial`\<[`ServiceOptions`](../interfaces/ServiceOptions.md)\> = `{}`

The configuration options for the service, including singleton and alias settings.

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
@Service({ singleton: true, alias: 'MyService' })
class MyService {
  // Service class logic here.
}
```

## Defined in

[src/decorators/Service.ts:42](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/decorators/Service.ts#L42)
