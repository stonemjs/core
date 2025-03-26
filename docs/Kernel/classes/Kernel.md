[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/Kernel.ts:70](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L70)

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

- [`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

## Methods

### handle()

> **handle**(`event`): `Promise`\<`OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:147](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L147)

Handle Stone IncomingEvent.

#### Parameters

##### event

`IncomingEventType`

The Stone incoming event to handle.

#### Returns

`Promise`\<`OutgoingResponseType`\>

The Stone outgoing response.

#### Implementation of

`ILifecycleAdapterEventHandler.handle`

***

### onEventHandled()

> **onEventHandled**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:154](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L154)

Invoke subsequent hooks after handling the event.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onEventHandled`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#oneventhandled)

***

### onHandlingEvent()

> **onHandlingEvent**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:136](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L136)

Boot the providers.
Invoke subsequent hooks.
Note: Execution order is important here, never change it.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onHandlingEvent`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#onhandlingevent)

***

### onInit()

> **onInit**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:122](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L122)

Populate the context with the given bindings.
The context here is the service container.
Invoke subsequent hooks.
Note: Execution order is important here, never change it.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onInit`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#oninit)

***

### onTerminate()

> **onTerminate**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:161](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L161)

Invoke subsequent hooks on termination.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onTerminate`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#onterminate)

***

### create()

> `static` **create**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:91](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/Kernel.ts#L91)

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
