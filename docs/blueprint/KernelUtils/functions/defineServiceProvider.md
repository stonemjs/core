[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/KernelUtils](../README.md) / defineServiceProvider

# Function: defineServiceProvider()

Defines a service provider (factory or class) for the Stone.js application.

This utility registers a provider into the `stone.providers` blueprint section.
It supports both class-based and factory-based providers.

## Param

The service provider (factory function or class).

## Param

Optional flag to indicate if it's a factory.

## Example

```ts
defineServiceProvider(MyServiceProviderClass, { isClass: true })
defineServiceProvider((container) => new MyProvider(container))
```

## Call Signature

> **defineServiceProvider**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: [blueprint/KernelUtils.ts:356](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/KernelUtils.ts#L356)

Defines a factory-based service provider.

### Parameters

#### module

[`FactoryServiceProvider`](../../../declarations/type-aliases/FactoryServiceProvider.md)

The factory function that returns a service provider.

#### options?

Optional flag indicating this is a factory-based provider.

##### isFactory?

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

A partial StoneBlueprint with the provider metadata.

### Param

The service provider (factory function or class).

### Param

Optional flag to indicate if it's a factory.

### Example

```ts
defineServiceProvider(MyServiceProviderClass, { isClass: true })
defineServiceProvider((container) => new MyProvider(container))
```

## Call Signature

> **defineServiceProvider**(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

Defined in: [blueprint/KernelUtils.ts:368](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/KernelUtils.ts#L368)

Defines a class-based service provider.

### Parameters

#### module

[`IServiceProviderClass`](../../../declarations/type-aliases/IServiceProviderClass.md)

The class that implements a service provider.

#### options

Optional flag indicating this is a class-based provider.

##### isClass

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\>

A partial StoneBlueprint with the provider metadata.

### Param

The service provider (factory function or class).

### Param

Optional flag to indicate if it's a factory.

### Example

```ts
defineServiceProvider(MyServiceProviderClass, { isClass: true })
defineServiceProvider((container) => new MyProvider(container))
```
