[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Injectable](../README.md) / Injectable

# Function: Injectable()

> **Injectable**\<`T`\>(`options`): `ClassDecorator`

Defined in: [src/decorators/Injectable.ts:20](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Injectable.ts#L20)

Injectable decorator to mark a class as a service and automatically bind it to the container.

This decorator can be used to easily mark a class as injectable within the Stone.js framework,
allowing it to be managed by the service container.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

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
