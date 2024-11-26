[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [Kernel](../README.md) / Kernel

# Class: Kernel\<U, V\>

Class representing a Kernel.

The Kernel class is responsible for managing the main lifecycle of the application, including middleware
registration and provider management. It manages the initialization, registration, and booting of the
components required for a fully functional application.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Implements

- [`LifecycleEventHandler`](../../definitions/interfaces/LifecycleEventHandler.md)\<`U`, `V`\>

## Constructors

### new Kernel()

> `protected` **new Kernel**\<`U`, `V`\>(`options`): [`Kernel`](Kernel.md)\<`U`, `V`\>

Create a Kernel.

#### Parameters

• **options**: [`KernelOptions`](../interfaces/KernelOptions.md)\<`U`, `V`\>

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`U`, `V`\>

#### Defined in

[src/Kernel.ts:60](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L60)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/Kernel.ts:39](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L39)

***

### container

> `protected` `readonly` **container**: `Container`

#### Defined in

[src/Kernel.ts:38](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L38)

***

### currentEvent?

> `protected` `optional` **currentEvent**: `U`

#### Defined in

[src/Kernel.ts:36](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L36)

***

### currentResponse?

> `protected` `optional` **currentResponse**: `V`

#### Defined in

[src/Kernel.ts:37](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L37)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

#### Defined in

[src/Kernel.ts:41](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L41)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`KernelHandlerResolver`](../../definitions/type-aliases/KernelHandlerResolver.md)\<`U`, `V`\>

#### Defined in

[src/Kernel.ts:43](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L43)

***

### logger

> `protected` **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/Kernel.ts:35](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L35)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IProvider`](../../definitions/interfaces/IProvider.md)\>

#### Defined in

[src/Kernel.ts:40](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L40)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

#### Defined in

[src/Kernel.ts:42](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L42)

## Accessors

### eventMiddleware

#### Get Signature

> **get** `protected` **eventMiddleware**(): `MixedPipe`[]

Get event middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:94](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L94)

***

### middleware

#### Get Signature

> **get** `protected` **middleware**(): [`KernelMiddlewareConfig`](../../options/KernelConfig/interfaces/KernelMiddlewareConfig.md)

Get all middleware.

##### Returns

[`KernelMiddlewareConfig`](../../options/KernelConfig/interfaces/KernelMiddlewareConfig.md)

#### Defined in

[src/Kernel.ts:87](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L87)

***

### responseMiddleware

#### Get Signature

> **get** `protected` **responseMiddleware**(): `MixedPipe`[]

Get response middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:101](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L101)

***

### skipMiddleware

#### Get Signature

> **get** `protected` **skipMiddleware**(): `boolean`

Check if middleware should be skipped.

##### Returns

`boolean`

#### Defined in

[src/Kernel.ts:80](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L80)

***

### terminateMiddleware

#### Get Signature

> **get** `protected` **terminateMiddleware**(): `MixedPipe`[]

Get terminate middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:108](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L108)

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

[src/Kernel.ts:116](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L116)

***

### handle()

> **handle**(`event`): `Promise`\<`V`\>

Handle IncomingEvent.

#### Parameters

• **event**: `U`

The incoming event to handle.

#### Returns

`Promise`\<`V`\>

The outgoing response.

#### Implementation of

`LifecycleEventHandler.handle`

#### Defined in

[src/Kernel.ts:132](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L132)

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`U`, `V`\>, `V`\>

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`U`, `V`\>, `V`\>

The pipeline options for configuring middleware.

#### Defined in

[src/Kernel.ts:255](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L255)

***

### onBootstrap()

> `protected` **onBootstrap**(`event`): `Promise`\<`void`\>

Hook that runs at each event and just before running the action handler.
Useful to bootstrap things at each event.

#### Parameters

• **event**: `U`

The incoming event.

#### Returns

`Promise`\<`void`\>

#### Throws

If no event is provided.

#### Defined in

[src/Kernel.ts:167](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L167)

***

### onRegister()

> `protected` **onRegister**(): `Promise`\<`void`\>

Register services to the container.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Kernel.ts:156](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L156)

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

[src/Kernel.ts:142](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L142)

***

### prepareDestination()

> `protected` **prepareDestination**(`event`): `Promise`\<`V`\>

Prepare event destination.

#### Parameters

• **event**: `U`

The incoming event.

#### Returns

`Promise`\<`V`\>

The prepared response.

#### Throws

If no router or handler has been provided.

#### Defined in

[src/Kernel.ts:193](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L193)

***

### prepareResponse()

> `protected` **prepareResponse**(`event`): `Promise`\<`V`\>

Prepare response before sending

#### Parameters

• **event**: `U`

The incoming event.

#### Returns

`Promise`\<`V`\>

The prepared response.

#### Defined in

[src/Kernel.ts:223](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L223)

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`event`): `Promise`\<`void`\>

Send event to the destination.

#### Parameters

• **event**: `U`

The incoming event.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Kernel.ts:178](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L178)

***

### create()

> `static` **create**\<`U`, `V`\>(`options`): [`Kernel`](Kernel.md)\<`U`, `V`\>

Create a Kernel.

#### Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

#### Parameters

• **options**: [`KernelOptions`](../interfaces/KernelOptions.md)\<`U`, `V`\>

Kernel configuration options.

#### Returns

[`Kernel`](Kernel.md)\<`U`, `V`\>

A new Kernel instance.

#### Defined in

[src/Kernel.ts:51](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/Kernel.ts#L51)
