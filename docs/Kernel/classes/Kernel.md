[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Defined in: [Kernel.ts:32](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L32)

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

- [`LifecycleEventHandler`](../../declarations/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Constructors

### new Kernel()

> `protected` **new Kernel**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [Kernel.ts:58](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L58)

Create a Kernel.

#### Parameters

##### options

[`KernelOptions`](../interfaces/KernelOptions.md)

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

Defined in: [Kernel.ts:35](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L35)

***

### container

> `protected` `readonly` **container**: `Container`

Defined in: [Kernel.ts:34](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L34)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

Defined in: [Kernel.ts:36](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L36)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../declarations/interfaces/ILogger.md)

Defined in: [Kernel.ts:33](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L33)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IProvider`](../../declarations/interfaces/IProvider.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

Defined in: [Kernel.ts:38](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L38)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

Defined in: [Kernel.ts:37](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L37)

## Methods

### afterHandle()

> **afterHandle**(`context`): `Promise`\<`void`\>

Defined in: [Kernel.ts:114](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L114)

Hook that runs after handling each event.
Useful for cleanup tasks.

#### Parameters

##### context

[`HookContext`](../../declarations/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../declarations/interfaces/LifecycleEventHandler.md).[`afterHandle`](../../declarations/interfaces/LifecycleEventHandler.md#afterhandle)

***

### beforeHandle()

> **beforeHandle**(): `Promise`\<`void`\>

Defined in: [Kernel.ts:91](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L91)

Hook that runs before handling each event.
Useful to initialize things at each event.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../declarations/interfaces/LifecycleEventHandler.md).[`beforeHandle`](../../declarations/interfaces/LifecycleEventHandler.md#beforehandle)

***

### handle()

> **handle**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [Kernel.ts:106](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L106)

Handle IncomingEvent.

#### Parameters

##### event

`IncomingEventType`

The incoming event to handle.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The outgoing response.

#### Implementation of

`LifecycleEventHandler.handle`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [Kernel.ts:202](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L202)

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<`IncomingEventType`, `OutgoingResponseType`\>

The pipeline options for configuring middleware.

***

### onPrepare()

> **onPrepare**(): `Promise`\<`void`\>

Defined in: [Kernel.ts:75](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L75)

Hook that runs before creating the event context.
Useful to setup things.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../declarations/interfaces/LifecycleEventHandler.md).[`onPrepare`](../../declarations/interfaces/LifecycleEventHandler.md#onprepare)

***

### onTerminate()

> **onTerminate**(`context`): `Promise`\<`void`\>

Defined in: [Kernel.ts:126](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L126)

Hook that runs just before or just after returning the response.
Useful to perform cleanup.

#### Parameters

##### context

`Partial`\<[`HookContext`](../../declarations/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../declarations/interfaces/LifecycleEventHandler.md).[`onTerminate`](../../declarations/interfaces/LifecycleEventHandler.md#onterminate)

***

### prepareResponse()

> `protected` **prepareResponse**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [Kernel.ts:172](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L172)

Prepare response before sending

#### Parameters

##### event

`IncomingEventType`

The Kernel event.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The prepared response.

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [Kernel.ts:141](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L141)

Send event to the destination.

#### Parameters

##### event

`IncomingEventType`

The incoming event.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The prepared response.

#### Throws

InitializationError if no IncomingEvent is provided.

***

### create()

> `static` **create**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [Kernel.ts:49](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/Kernel.ts#L49)

Create a Kernel.

#### Type Parameters

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

#### Parameters

##### options

[`KernelOptions`](../interfaces/KernelOptions.md)

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

A new Kernel instance.
