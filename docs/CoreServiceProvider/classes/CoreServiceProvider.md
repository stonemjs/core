[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [CoreServiceProvider](../README.md) / CoreServiceProvider

# Class: CoreServiceProvider

Class representing a CoreServiceProvider.

The CoreServiceProvider is responsible for managing the core services,
listeners, subscribers, and adapters required by the application.
It interacts with the service container to bind and resolve dependencies,
ensuring all components are available when needed.

## Author

Mr. Stone <evensstone@gmail.com>

## Implements

- [`IProvider`](../../definitions/interfaces/IProvider.md)

## Constructors

### new CoreServiceProvider()

> **new CoreServiceProvider**(`container`): [`CoreServiceProvider`](CoreServiceProvider.md)

Create a new instance of CoreServiceProvider.

#### Parameters

• **container**: [`CoreServiceProviderOptions`](../interfaces/CoreServiceProviderOptions.md)

The service container to manage dependencies.

#### Returns

[`CoreServiceProvider`](CoreServiceProvider.md)

#### Throws

If the Blueprint config or EventEmitter is not bound to the container.

#### Defined in

[src/CoreServiceProvider.ts:54](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/CoreServiceProvider.ts#L54)

## Methods

### boot()

> **boot**(): `Promise`\<`void`\>

Boots the provider after registration. This method is used to initialize services that need to be started.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProvider`](../../definitions/interfaces/IProvider.md).[`boot`](../../definitions/interfaces/IProvider.md#boot)

#### Defined in

[src/CoreServiceProvider.ts:118](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/CoreServiceProvider.ts#L118)

***

### register()

> **register**(): `void`

Registers the provider into the system. Typically used for adding services or bindings to the container.

#### Returns

`void`

#### Implementation of

[`IProvider`](../../definitions/interfaces/IProvider.md).[`register`](../../definitions/interfaces/IProvider.md#register)

#### Defined in

[src/CoreServiceProvider.ts:107](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/CoreServiceProvider.ts#L107)
