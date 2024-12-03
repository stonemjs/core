[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Class representing a Kernel.

The Kernel class is responsible for managing the main lifecycle of the application, including middleware
registration and provider management. It manages the initialization, registration, and booting of the
components required for a fully functional application.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Implements

- [`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Constructors

### new Kernel()

> `protected` **new Kernel**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Create a Kernel.

#### Parameters

• **options**: [`KernelOptions`](../interfaces/KernelOptions.md)

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/Kernel.ts:55](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L55)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/Kernel.ts:35](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L35)

***

### container

> `protected` `readonly` **container**: `Container`

#### Defined in

[src/Kernel.ts:34](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L34)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

#### Defined in

[src/Kernel.ts:37](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L37)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/Kernel.ts:33](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L33)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IProvider`](../../definitions/interfaces/IProvider.md)\>

#### Defined in

[src/Kernel.ts:36](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L36)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

#### Defined in

[src/Kernel.ts:38](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L38)

## Accessors

### middleware

#### Get Signature

> **get** `protected` **middleware**(): `MixedPipe`[]

Get all middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:73](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L73)

***

### terminateMiddleware

#### Get Signature

> **get** `protected` **terminateMiddleware**(): `MixedPipe`[]

Get terminate middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:80](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L80)

## Methods

### beforeHandle()

> **beforeHandle**(): `Promise`\<`void`\>

Hook that runs before handling each event.
Useful to initialize things at each event.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`beforeHandle`](../../definitions/interfaces/LifecycleEventHandler.md#beforehandle)

#### Defined in

[src/Kernel.ts:93](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L93)

***

### handle()

> **handle**(`event`): `Promise`\<`OutgoingResponseType`\>

Handle IncomingEvent.

#### Parameters

• **event**: `IncomingEventType`

The incoming event to handle.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The outgoing response.

#### Implementation of

`LifecycleEventHandler.handle`

#### Defined in

[src/Kernel.ts:109](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L109)

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>, `OutgoingResponseType`\>

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>, `OutgoingResponseType`\>

The pipeline options for configuring middleware.

#### Defined in

[src/Kernel.ts:205](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L205)

***

### onBootstrap()

> `protected` **onBootstrap**(`event`): `Promise`\<`void`\>

Hook that runs at each event and just before running the action handler.
Useful to bootstrap things at each event.

#### Parameters

• **event**: `IncomingEventType`

The incoming event.

#### Returns

`Promise`\<`void`\>

#### Throws

If no event is provided.

#### Defined in

[src/Kernel.ts:148](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L148)

***

### onRegister()

> `protected` **onRegister**(): `Promise`\<`void`\>

Register services to the container.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Kernel.ts:137](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L137)

***

### onTerminate()

> **onTerminate**(): `Promise`\<`void`\>

Hook that runs just before or just after returning the response.
Useful to perform cleanup.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`onTerminate`](../../definitions/interfaces/LifecycleEventHandler.md#onterminate)

#### Defined in

[src/Kernel.ts:118](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L118)

***

### prepareResponse()

> `protected` **prepareResponse**(`context`): `Promise`\<`OutgoingResponseType`\>

Prepare response before sending

#### Parameters

• **context**: [`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The Kernel event context.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The prepared response.

#### Defined in

[src/Kernel.ts:179](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L179)

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`event`): `Promise`\<`OutgoingResponseType`\>

Send event to the destination.

#### Parameters

• **event**: `IncomingEventType`

The incoming event.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The prepared response.

#### Defined in

[src/Kernel.ts:164](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L164)

***

### create()

> `static` **create**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Create a Kernel.

#### Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

#### Parameters

• **options**: [`KernelOptions`](../interfaces/KernelOptions.md)

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

A new Kernel instance.

#### Defined in

[src/Kernel.ts:46](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/Kernel.ts#L46)
