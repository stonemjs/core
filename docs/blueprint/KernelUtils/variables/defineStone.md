[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineStone

# Variable: defineStone()

> `const` **defineStone**: \{(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>; (`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>; \} = `defineService`

Defined in: [blueprint/KernelUtils.ts:474](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/KernelUtils.ts#L474)

Defines a core Stone.js service.

This is a specialized alias for `defineService`, used to register essential services
that are part of the application’s foundation. It supports both factory and class-based service definitions.

## Call Signature

> (`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defines a factory-based service for the Stone.js application.

### Parameters

#### module

[`FactoryService`](../../../declarations/type-aliases/FactoryService.md)

A factory function that returns the service instance.

#### options

[`ServiceOptions`](../../../declarations/interfaces/ServiceOptions.md) & `object`

Configuration options for the service including alias and factory flag.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

A partial StoneBlueprint registering the service.

## Call Signature

> (`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defines a class-based service for the Stone.js application.

### Parameters

#### module

[`IServiceClass`](../../../declarations/type-aliases/IServiceClass.md)

The service class to be registered.

#### options

[`ServiceOptions`](../../../declarations/interfaces/ServiceOptions.md) & `object`

Configuration options for the service including alias and factory flag.

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

A partial StoneBlueprint registering the service.

## See

defineService

## Example

```ts
defineStone(MyStoneServiceClass, { alias: 'stone.core', isClass: true })
defineStone((container) => ({ save(){} }), { alias: 'myService' })
```
