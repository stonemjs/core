[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Service](../README.md) / Service

# Function: Service()

> **Service**\<`T`\>(`options`): `ClassDecorator`

Defined in: [decorators/Service.ts:42](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Service.ts#L42)

Service decorator to mark a class as a service and automatically bind it to the container.

This decorator is useful for marking classes that should be treated as services by the Stone.js framework,
making them easily injectable and manageable by the service container.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

`Partial`\<[`ServiceOptions`](../interfaces/ServiceOptions.md)\> = `{}`

The configuration options for the service, including singleton and alias settings.

## Returns

`ClassDecorator`

A decorator function to set metadata on the target class.

## Example

```typescript
@Service({ singleton: true, alias: 'MyService' })
class MyService {
  // Service class logic here.
}
```
