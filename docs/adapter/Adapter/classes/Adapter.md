[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, AdapterContextType\>

Defined in: [core/src/adapter/Adapter.ts:56](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L56)

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

Defined in: [core/src/adapter/Adapter.ts:90](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L90)

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

Defined in: [core/src/adapter/Adapter.ts:81](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L81)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`AdapterEventHandlerResolver`](../../../declarations/type-aliases/AdapterEventHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:82](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L82)

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHooks`](../../../declarations/interfaces/AdapterHooks.md)

Defined in: [core/src/adapter/Adapter.ts:80](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L80)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../../declarations/interfaces/ILogger.md)

Defined in: [core/src/adapter/Adapter.ts:79](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L79)

## Methods

### afterHandle()

> `protected` **afterHandle**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:218](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L218)

Hook that runs after handling each event.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

***

### beforeHandle()

> `protected` **beforeHandle**(`eventHandler`): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:205](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L205)

Hook that runs before handling each event.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

***

### executeHooks()

> `protected` **executeHooks**(`hook`, `context`?): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:244](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L244)

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

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/adapter/Adapter.ts:257](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L257)

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The pipeline options for transforming the event.

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:184](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L184)

Hook that runs once before everything.

#### Returns

`Promise`\<`void`\>

***

### onPrepare()

> `protected` **onPrepare**(`eventHandler`): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:193](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L193)

Hook that runs before preparing the event context.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

#### Returns

`Promise`\<`void`\>

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `context`): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:231](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L231)

Hook that runs after running the action handler.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`void`\>

***

### prepareResponse()

> `protected` **prepareResponse**(`eventHandler`, `context`): `Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/adapter/Adapter.ts:306](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L306)

Prepare the response for the event handler.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to prepare the response for.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The raw response wrapper.

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [core/src/adapter/Adapter.ts:275](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L275)

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

[`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The error handler.

***

### run()

> `abstract` **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/adapter/Adapter.ts:132](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L132)

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

Defined in: [core/src/adapter/Adapter.ts:140](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/adapter/Adapter.ts#L140)

Incoming message listener.

#### Parameters

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<`RawResponseType`\>

Platform-specific output.
