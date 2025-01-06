[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Defined in: [src/Kernel.ts:32](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L32)

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

Defined in: [src/Kernel.ts:58](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L58)

Create a Kernel.

#### Parameters

##### options

[`KernelOptions`](../interfaces/KernelOptions.md)

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

Defined in: [src/Kernel.ts:35](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L35)

***

### container

> `protected` `readonly` **container**: `Container`

Defined in: [src/Kernel.ts:34](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L34)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

Defined in: [src/Kernel.ts:36](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L36)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

Defined in: [src/Kernel.ts:33](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L33)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IProvider`](../../definitions/interfaces/IProvider.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

Defined in: [src/Kernel.ts:38](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L38)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

Defined in: [src/Kernel.ts:37](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L37)

## Methods

### afterHandle()

> **afterHandle**(`context`): `Promise`\<`void`\>

Defined in: [src/Kernel.ts:114](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L114)

Hook that runs after handling each event.
Useful for cleanup tasks.

#### Parameters

##### context

[`HookContext`](../../definitions/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`afterHandle`](../../definitions/interfaces/LifecycleEventHandler.md#afterhandle)

***

### beforeHandle()

> **beforeHandle**(): `Promise`\<`void`\>

Defined in: [src/Kernel.ts:91](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L91)

Hook that runs before handling each event.
Useful to initialize things at each event.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`beforeHandle`](../../definitions/interfaces/LifecycleEventHandler.md#beforehandle)

***

### handle()

> **handle**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [src/Kernel.ts:106](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L106)

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

Defined in: [src/Kernel.ts:203](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L203)

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<`IncomingEventType`, `OutgoingResponseType`\>

The pipeline options for configuring middleware.

***

### onPrepare()

> **onPrepare**(): `Promise`\<`void`\>

Defined in: [src/Kernel.ts:75](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L75)

Hook that runs before creating the event context.
Useful to setup things.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`onPrepare`](../../definitions/interfaces/LifecycleEventHandler.md#onprepare)

***

### onTerminate()

> **onTerminate**(`context`): `Promise`\<`void`\>

Defined in: [src/Kernel.ts:126](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L126)

Hook that runs just before or just after returning the response.
Useful to perform cleanup.

#### Parameters

##### context

`Partial`\<[`HookContext`](../../definitions/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md).[`onTerminate`](../../definitions/interfaces/LifecycleEventHandler.md#onterminate)

***

### prepareResponse()

> `protected` **prepareResponse**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [src/Kernel.ts:171](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L171)

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

Defined in: [src/Kernel.ts:140](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L140)

Send event to the destination.

#### Parameters

##### event

`IncomingEventType`

The incoming event.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The prepared response.

***

### create()

> `static` **create**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [src/Kernel.ts:49](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/Kernel.ts#L49)

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
