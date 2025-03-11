[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [CoreServiceProvider](../README.md) / CoreServiceProvider

# Class: CoreServiceProvider

Defined in: [core/src/CoreServiceProvider.ts:51](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/CoreServiceProvider.ts#L51)

Class representing a CoreServiceProvider.

The CoreServiceProvider is responsible for managing the core services,
listeners, subscribers, and adapters required by the application.
It interacts with the service container to bind and resolve dependencies,
ensuring all components are available when needed.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- [`IServiceProvider`](../../declarations/interfaces/IServiceProvider.md)

## Constructors

### new CoreServiceProvider()

> **new CoreServiceProvider**(`container`): [`CoreServiceProvider`](CoreServiceProvider.md)

Defined in: [core/src/CoreServiceProvider.ts:78](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/CoreServiceProvider.ts#L78)

Create a new instance of CoreServiceProvider.

#### Parameters

##### container

[`CoreServiceProviderOptions`](../interfaces/CoreServiceProviderOptions.md)

The service container to manage dependencies.

#### Returns

[`CoreServiceProvider`](CoreServiceProvider.md)

#### Throws

If the Blueprint config or EventEmitter is not bound to the container.

## Methods

### boot()

> **boot**(): `Promise`\<`void`\>

Defined in: [core/src/CoreServiceProvider.ts:148](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/CoreServiceProvider.ts#L148)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceProvider`](../../declarations/interfaces/IServiceProvider.md).[`boot`](../../declarations/interfaces/IServiceProvider.md#boot)

***

### register()

> **register**(): `void`

Defined in: [core/src/CoreServiceProvider.ts:135](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/CoreServiceProvider.ts#L135)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void`

#### Implementation of

[`IServiceProvider`](../../declarations/interfaces/IServiceProvider.md).[`register`](../../declarations/interfaces/IServiceProvider.md#register)
