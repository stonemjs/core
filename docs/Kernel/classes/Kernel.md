[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<IncomingEventType, OutgoingResponseType\>

Defined in: [core/src/Kernel.ts:71](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L71)

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

Defined in: [core/src/Kernel.ts:148](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L148)

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

Defined in: [core/src/Kernel.ts:155](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L155)

Invoke subsequent hooks after handling the event.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onEventHandled`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#oneventhandled)

***

### onHandlingEvent()

> **onHandlingEvent**(): `Promise`\<`void`\>

Defined in: [core/src/Kernel.ts:137](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L137)

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

Defined in: [core/src/Kernel.ts:123](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L123)

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

Defined in: [core/src/Kernel.ts:162](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L162)

Invoke subsequent hooks on termination.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILifecycleAdapterEventHandler`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md).[`onTerminate`](../../declarations/interfaces/ILifecycleAdapterEventHandler.md#onterminate)

***

### create()

> `static` **create**\<`IncomingEventType`, `OutgoingResponseType`\>(`options`): [`Kernel`](Kernel.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/Kernel.ts:92](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/Kernel.ts#L92)

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
