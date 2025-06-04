[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [providers/CoreServiceProvider](../README.md) / CoreServiceProvider

# Class: CoreServiceProvider

Defined in: [providers/CoreServiceProvider.ts:51](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/providers/CoreServiceProvider.ts#L51)

Class representing a CoreServiceProvider.

The CoreServiceProvider is responsible for managing the core services,
listeners, subscribers, and adapters required by the application.
It interacts with the service container to bind and resolve dependencies,
ensuring all components are available when needed.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- [`IServiceProvider`](../../../declarations/interfaces/IServiceProvider.md)

## Constructors

### Constructor

> **new CoreServiceProvider**(`container`): `CoreServiceProvider`

Defined in: [providers/CoreServiceProvider.ts:63](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/providers/CoreServiceProvider.ts#L63)

Create a new instance of CoreServiceProvider.

#### Parameters

##### container

[`CoreServiceProviderOptions`](../interfaces/CoreServiceProviderOptions.md)

The service container to manage dependencies.

#### Returns

`CoreServiceProvider`

#### Throws

If the Blueprint config or EventEmitter is not bound to the container.

## Methods

### boot()

> **boot**(): `Promise`\<`void`\>

Defined in: [providers/CoreServiceProvider.ts:132](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/providers/CoreServiceProvider.ts#L132)

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceProvider`](../../../declarations/interfaces/IServiceProvider.md).[`boot`](../../../declarations/interfaces/IServiceProvider.md#boot)

***

### register()

> **register**(): `void`

Defined in: [providers/CoreServiceProvider.ts:120](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/providers/CoreServiceProvider.ts#L120)

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void`

#### Implementation of

[`IServiceProvider`](../../../declarations/interfaces/IServiceProvider.md).[`register`](../../../declarations/interfaces/IServiceProvider.md#register)
