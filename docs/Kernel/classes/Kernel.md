[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/Kernel.ts:72](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L72)

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

- [`LifecycleAdapterEventHandler`](../../declarations/interfaces/LifecycleAdapterEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Constructors

### new Kernel()

> `protected` **new Kernel**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:106](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L106)

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

Defined in: [core/src/Kernel.ts:79](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L79)

***

### container

> `protected` `readonly` **container**: `Container`

Defined in: [core/src/Kernel.ts:78](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L78)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

Defined in: [core/src/Kernel.ts:80](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L80)

***

### hooks

> `protected` `readonly` **hooks**: [`KernelHook`](../../declarations/type-aliases/KernelHook.md)

Defined in: [core/src/Kernel.ts:77](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L77)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../declarations/interfaces/ILogger.md)

Defined in: [core/src/Kernel.ts:76](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L76)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IServiceProvider`](../../declarations/interfaces/IServiceProvider.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

Defined in: [core/src/Kernel.ts:82](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L82)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

Defined in: [core/src/Kernel.ts:81](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L81)

***

### resolvedApplication?

> `protected` `optional` **resolvedApplication**: [`IApplication`](../../declarations/interfaces/IApplication.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:85](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L85)

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, [`IErrorHandler`](../../declarations/interfaces/IErrorHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

Defined in: [core/src/Kernel.ts:83](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L83)

***

### resolvedEventHandler?

> `protected` `optional` **resolvedEventHandler**: [`IEventHandler`](../../declarations/interfaces/IEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:86](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L86)

## Methods

### afterHandle()

> **afterHandle**(`context`): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:172](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L172)

Invoke subsequent hooks after handling the event.
Execution order is important here, never change it.

#### Parameters

##### context

[`HookContext`](../../declarations/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleAdapterEventHandler`](../../declarations/interfaces/LifecycleAdapterEventHandler.md).[`afterHandle`](../../declarations/interfaces/LifecycleAdapterEventHandler.md#afterhandle)

***

### beforeHandle()

> **beforeHandle**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:148](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L148)

Boot the providers.
Invoke subsequent hooks.
Execution order is important here, never change it.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleAdapterEventHandler`](../../declarations/interfaces/LifecycleAdapterEventHandler.md).[`beforeHandle`](../../declarations/interfaces/LifecycleAdapterEventHandler.md#beforehandle)

***

### handle()

> **handle**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:164](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L164)

Handle Stone IncomingEvent.

#### Parameters

##### event

`IncomingEventType`

The Stone incoming event to handle.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The Stone outgoing response.

#### Implementation of

`LifecycleAdapterEventHandler.handle`

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:248](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L248)

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<`IncomingEventType`, `OutgoingResponseType`\>

The pipeline options for configuring middleware.

***

### onPrepare()

> **onPrepare**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:128](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L128)

Populate the context with the given bindings.
The context here is the service container.
Invoke subsequent hooks.
Resolve the app event handler.
Execution order is important here, never change it.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleAdapterEventHandler`](../../declarations/interfaces/LifecycleAdapterEventHandler.md).[`onPrepare`](../../declarations/interfaces/LifecycleAdapterEventHandler.md#onprepare)

***

### onTerminate()

> **onTerminate**(`context`): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:185](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L185)

Invoke subsequent hooks on termination.
Execution order is important here, never change it.

#### Parameters

##### context

`Partial`\<[`HookContext`](../../declarations/interfaces/HookContext.md)\<`IncomingEventType`, `OutgoingResponseType`\>\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`LifecycleAdapterEventHandler`](../../declarations/interfaces/LifecycleAdapterEventHandler.md).[`onTerminate`](../../declarations/interfaces/LifecycleAdapterEventHandler.md#onterminate)

***

### prepareResponse()

> `protected` **prepareResponse**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:227](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L227)

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

Defined in: [core/src/Kernel.ts:201](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L201)

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

Defined in: [core/src/Kernel.ts:94](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/Kernel.ts#L94)

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
