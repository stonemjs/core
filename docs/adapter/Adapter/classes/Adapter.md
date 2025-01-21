[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, AdapterContextType\>

Defined in: [adapter/Adapter.ts:52](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L52)

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

• **AdapterContextType** *extends* [`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\> = [`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

## Implements

- [`IAdapter`](../../../declarations/interfaces/IAdapter.md)

## Constructors

### new Adapter()

> `protected` **new Adapter**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>(`options`): [`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

Defined in: [adapter/Adapter.ts:71](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L71)

Create an Adapter.

#### Parameters

##### options

[`AdapterOptions`](../interfaces/AdapterOptions.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Adapter options.

#### Returns

[`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

Defined in: [adapter/Adapter.ts:63](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L63)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`AdapterHandlerResolver`](../../../declarations/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [adapter/Adapter.ts:64](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L64)

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

Defined in: [adapter/Adapter.ts:62](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L62)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../../declarations/interfaces/ILogger.md)

Defined in: [adapter/Adapter.ts:61](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L61)

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:190](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L190)

Hook that runs after handling each event.

#### Parameters

##### eventHandler

[`LifecycleEventHandler`](../../../declarations/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:177](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L177)

Hook that runs before handling each event.

#### Parameters

##### eventHandler

[`LifecycleEventHandler`](../../../declarations/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

***

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:216](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L216)

Execute lifecycle hooks.

#### Parameters

##### hook

keyof [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

The hook to execute.

##### context?

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

***

### getErrorHandler()

> `protected` **getErrorHandler**(`error`): [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [adapter/Adapter.ts:245](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L245)

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

[`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The error handler.

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [adapter/Adapter.ts:229](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L229)

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The pipeline options for transforming the event.

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:156](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L156)

Hook that runs once before everything.

#### Returns

`Promise`\<`void`\>

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:165](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L165)

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

[`LifecycleEventHandler`](../../../declarations/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:203](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L203)

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

[`LifecycleEventHandler`](../../../declarations/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [adapter/Adapter.ts:263](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L263)

Prepare the response for the event handler.

#### Parameters

##### eventHandler

[`EventHandler`](../../../declarations/type-aliases/EventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to prepare the response for.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The raw response wrapper.

***

### run()

> `abstract` **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [adapter/Adapter.ts:112](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L112)

Run handler.

#### Type Parameters

• **ExecutionResultType** = `unknown`

#### Returns

`Promise`\<`ExecutionResultType`\>

The result of the handler execution.

#### Example

Implementation flow
```ts
await this.onInit();
const eventHandler = this.handlerResolver(this.blueprint)
await this.onPrepare(eventHandler);
const rawEvent: MockRawEvent = { name: 'Stone.js' }
const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
  rawEvent,
  incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
  rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
}
return await this.sendEventThroughDestination(eventHandler, context);
```

#### Implementation of

[`IAdapter`](../../../declarations/interfaces/IAdapter.md).[`run`](../../../declarations/interfaces/IAdapter.md#run)

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`eventHandler`, `context`): `Promise`\<`RawResponseType`\>

Defined in: [adapter/Adapter.ts:120](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/adapter/Adapter.ts#L120)

Incoming message listener.

#### Parameters

##### eventHandler

[`EventHandler`](../../../declarations/type-aliases/EventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`RawResponseType`\>

Platform-specific output.
