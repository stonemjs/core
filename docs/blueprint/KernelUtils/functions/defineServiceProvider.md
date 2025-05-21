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

> **defineServiceProvider**(`module`, `options?`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:341](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L341)

Defines a factory-based service provider.

### Parameters

#### module

[`FactoryServiceProvider`](../../../declarations/type-aliases/FactoryServiceProvider.md)

The factory function that returns a service provider.

#### options?

Optional flag indicating this is a factory-based provider.

##### isFactory

`true`

### Returns

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

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

> **defineServiceProvider**(`module`, `options`): `Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

Defined in: [blueprint/KernelUtils.ts:353](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/KernelUtils.ts#L353)

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

`Partial`\<[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<[`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md), [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)\>\>

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
