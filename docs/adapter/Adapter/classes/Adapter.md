[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, AdapterContextType\>

Class representing an Adapter.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **AdapterContextType** *extends* [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\> = [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

## Implements

- [`IAdapter`](../../../definitions/interfaces/IAdapter.md)\<`RawResponseType`\>

## Constructors

### new Adapter()

> `protected` **new Adapter**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>(`options`): [`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

Create an Adapter.

#### Parameters

• **options**: [`AdapterOptions`](../interfaces/AdapterOptions.md)\<`RawResponseType`, `IncomingEventType`, `OutgoingResponseType`\>

Adapter options.

#### Returns

[`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

#### Defined in

[src/adapter/Adapter.ts:71](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L71)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/Adapter.ts:62](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L62)

***

### errorHandler

> `protected` `readonly` **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:63](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L63)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:64](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L64)

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:61](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L61)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:60](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L60)

## Methods

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Hook that runs before handling each event.

#### Parameters

• **eventHandler**: [`LifecycleEventHandler`](../../../definitions/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:160](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L160)

***

### executeHooks()

> `protected` **executeHooks**(`hook`): `Promise`\<`void`\>

Execute lifecycle hooks.

#### Parameters

• **hook**: keyof [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

The hook to execute.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:185](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L185)

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(`eventHandler`): `PipelineOptions`\<`AdapterContextType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

Create pipeline options for the Adapter.

#### Parameters

• **eventHandler**: [`EventHandler`](../../../definitions/type-aliases/EventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Returns

`PipelineOptions`\<`AdapterContextType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

The pipeline options for transforming the event.

#### Defined in

[src/adapter/Adapter.ts:198](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L198)

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Hook that runs once before everything.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:151](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L151)

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `_adapterContext`): `Promise`\<`void`\>

Hook that runs after running the action handler.

#### Parameters

• **eventHandler**: [`LifecycleEventHandler`](../../../definitions/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

• **\_adapterContext**: `AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:173](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L173)

***

### run()

> `abstract` **run**(): `Promise`\<`RawResponseType`\>

Run handler.

#### Returns

`Promise`\<`RawResponseType`\>

The result of the handler execution.

#### Example

Implementation flow
```ts
await this.onInit();
const context: AdapterContextType = {};
return await this.sendEventThroughDestination(context);
```

#### Implementation of

[`IAdapter`](../../../definitions/interfaces/IAdapter.md).[`run`](../../../definitions/interfaces/IAdapter.md#run)

#### Defined in

[src/adapter/Adapter.ts:110](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L110)

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`): `Promise`\<`RawResponseType`\>

Incoming message listener.

#### Parameters

• **context**: `AdapterContextType`

The event context.

#### Returns

`Promise`\<`RawResponseType`\>

Platform-specific output.

#### Defined in

[src/adapter/Adapter.ts:118](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/adapter/Adapter.ts#L118)
