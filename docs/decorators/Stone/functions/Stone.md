[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Stone](../README.md) / Stone

# Function: Stone()

> **Stone**\<`T`\>(`options`): `ClassDecorator`

Defined in: [core/src/decorators/Stone.ts:20](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/decorators/Stone.ts#L20)

Stone decorator to mark a class as a stone and automatically bind it to the container.

This decorator can be used to easily mark a class as injectable within the Stone.js framework,
allowing it to be managed by the service container.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### options

`Partial`\<[`ServiceOptions`](../../Service/interfaces/ServiceOptions.md)\> = `{}`

The configuration options for the service, including singleton and alias settings.

## Returns

`ClassDecorator`

A function to set the class as a service.

A decorator function to set metadata on the target class.

## Param

The configuration options for the service.

## Examples

```typescript
@Injectable({ singleton: true, alias: 'MyInjectableService' })
class MyInjectableService {
  // Service class logic here.
}
```

```typescript
@Service({ singleton: true, alias: 'MyService' })
class MyService {
  // Service class logic here.
}
```
