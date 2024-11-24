[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [Kernel](../README.md) / Kernel

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

[src/Kernel.ts:59](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L59)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/Kernel.ts:38](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L38)

***

### container

> `protected` `readonly` **container**: `Container`

#### Defined in

[src/Kernel.ts:37](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L37)

***

### currentEvent?

> `protected` `optional` **currentEvent**: `U`

#### Defined in

[src/Kernel.ts:35](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L35)

***

### currentResponse?

> `protected` `optional` **currentResponse**: `V`

#### Defined in

[src/Kernel.ts:36](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L36)

***

### eventEmitter

> `protected` `readonly` **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

#### Defined in

[src/Kernel.ts:40](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L40)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`KernelHandlerResolver`](../../definitions/type-aliases/KernelHandlerResolver.md)\<`U`, `V`\>

#### Defined in

[src/Kernel.ts:42](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L42)

***

### logger

> `protected` **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/Kernel.ts:34](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L34)

***

### providers

> `protected` `readonly` **providers**: `Set`\<[`IProvider`](../../definitions/interfaces/IProvider.md)\>

#### Defined in

[src/Kernel.ts:39](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L39)

***

### registeredProviders

> `protected` `readonly` **registeredProviders**: `Set`\<`string`\>

#### Defined in

[src/Kernel.ts:41](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L41)

## Accessors

### eventMiddleware

#### Get Signature

> **get** `protected` **eventMiddleware**(): `MixedPipe`[]

Get event middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:93](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L93)

***

### middleware

#### Get Signature

> **get** `protected` **middleware**(): [`KernelMiddlewareConfig`](../../options/KernelConfig/interfaces/KernelMiddlewareConfig.md)

Get all middleware.

##### Returns

[`KernelMiddlewareConfig`](../../options/KernelConfig/interfaces/KernelMiddlewareConfig.md)

#### Defined in

[src/Kernel.ts:86](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L86)

***

### responseMiddleware

#### Get Signature

> **get** `protected` **responseMiddleware**(): `MixedPipe`[]

Get response middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:100](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L100)

***

### skipMiddleware

#### Get Signature

> **get** `protected` **skipMiddleware**(): `boolean`

Check if middleware should be skipped.

##### Returns

`boolean`

#### Defined in

[src/Kernel.ts:79](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L79)

***

### terminateMiddleware

#### Get Signature

> **get** `protected` **terminateMiddleware**(): `MixedPipe`[]

Get terminate middleware.

##### Returns

`MixedPipe`[]

#### Defined in

[src/Kernel.ts:107](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L107)

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

[src/Kernel.ts:115](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L115)

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

[src/Kernel.ts:131](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L131)

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`U`, `V`\>, `V`\>

Creates pipeline options for the Kernel.

#### Returns

`PipelineOptions`\<[`KernelContext`](../../definitions/interfaces/KernelContext.md)\<`U`, `V`\>, `V`\>

The pipeline options for configuring middleware.

#### Defined in

[src/Kernel.ts:254](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L254)

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

[src/Kernel.ts:166](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L166)

***

### onRegister()

> `protected` **onRegister**(): `Promise`\<`void`\>

Register services to the container.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/Kernel.ts:155](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L155)

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

[src/Kernel.ts:141](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L141)

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

[src/Kernel.ts:192](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L192)

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

[src/Kernel.ts:222](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L222)

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

[src/Kernel.ts:177](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L177)

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

[src/Kernel.ts:50](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/Kernel.ts#L50)
