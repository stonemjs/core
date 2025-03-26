[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, AdapterContextType\>

Defined in: [core/src/adapter/Adapter.ts:54](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L54)

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

> `protected` **new Adapter**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>(`blueprint`): [`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

Defined in: [core/src/adapter/Adapter.ts:86](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L86)

Create an Adapter.

#### Parameters

##### blueprint

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

The blueprint to create the adapter.

#### Returns

[`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

Defined in: [core/src/adapter/Adapter.ts:86](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L86)

The blueprint to create the adapter.

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHookType`](../../../declarations/interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:77](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L77)

***

### middleware

> `protected` `readonly` **middleware**: [`AdapterMixedPipeType`](../../../declarations/type-aliases/AdapterMixedPipeType.md)\<`AdapterContextType`, `RawResponseType`\>[]

Defined in: [core/src/adapter/Adapter.ts:78](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L78)

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>\>

Defined in: [core/src/adapter/Adapter.ts:79](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L79)

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler`?): `Promise`\<`RawResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:192](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L192)

Build the raw response.

#### Parameters

##### context

`AdapterContextType`

The event context.

##### eventHandler?

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to be run.

#### Returns

`Promise`\<`RawResponseType`\>

The raw response wrapper.

***

### executeEventHandlerHooks()

> `protected` **executeEventHandlerHooks**(`hook`, `eventHandler`): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:285](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L285)

Execute the event handler lifecycle hooks.

#### Parameters

##### hook

[`KernelHookName`](../../../declarations/type-aliases/KernelHookName.md)

The hook to execute.

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to be run.

#### Returns

`Promise`\<`void`\>

***

### executeHooks()

> `protected` **executeHooks**(`name`, `context`?, `error`?): `Promise`\<`void`\>

Defined in: [core/src/adapter/Adapter.ts:301](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L301)

Execute adapter lifecycle hooks.

#### Parameters

##### name

[`AdapterHookName`](../../../declarations/type-aliases/AdapterHookName.md)

The hook's name.

##### context?

`AdapterContextType`

The event context.

##### error?

`any`

The error to handle.

#### Returns

`Promise`\<`void`\>

***

### handleError()

> `protected` **handleError**(`error`, `context`): `Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/adapter/Adapter.ts:180](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L180)

Handle error.

#### Parameters

##### error

`Error`

The error to handle.

##### context

`AdapterContextType`

The event context.

#### Returns

`Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The raw response.

***

### handleEvent()

> `protected` **handleEvent**(`context`, `eventHandler`): `Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/adapter/Adapter.ts:150](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L150)

Handle the event.

#### Parameters

##### context

`AdapterContextType`

The event context.

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to be run.

#### Returns

`Promise`\<[`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The raw response wrapper.

***

### makePipelineOptions()

> `protected` **makePipelineOptions**(): `PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

Defined in: [core/src/adapter/Adapter.ts:212](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L212)

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The pipeline options for transforming the event.

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [core/src/adapter/Adapter.ts:259](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L259)

Get the error handler for the given error.

#### Parameters

##### error

`Error`

The error to get the handler for.

#### Returns

[`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

The error handler.

#### Throws

IntegrationError

***

### resolveEventHandler()

> `protected` **resolveEventHandler**(): [`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:234](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L234)

Get the event handler for the adapter.

#### Returns

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

***

### run()

> `abstract` **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/adapter/Adapter.ts:112](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L112)

Run handler.

#### Type Parameters

• **ExecutionResultType** = `unknown`

#### Returns

`Promise`\<`ExecutionResultType`\>

The result of the handler execution.

#### Example

Implementation flow
```ts
await this.executeHooks('onStart');
const eventHandlerResolver = this.blueprint.get('stone.adapter.eventHandlerResolver');
const eventHandler = eventHandlerResolver(this.blueprint)
await this.executeHooks('onInit', eventHandler);
const rawEvent: MockRawEvent = { name: 'Stone.js' }
const context: AdapterContext<MockRawEvent, MockRawResponse, any, IncomingEvent, IncomingEventOptions, OutgoingResponse> = {
  rawEvent,
  incomingEventBuilder: AdapterBuilder.create<IncomingEventOptions, IncomingEvent>({ resolver: v => IncomingEvent.create(v) }),
  rawResponseBuilder: AdapterBuilder.create<RawResponseOptions, MockRawResponseWrapper>({ resolver: v => new MockRawResponseWrapper(v) })
}
return await this.sendEventThroughDestination(context, eventHandler);
```

#### Implementation of

[`IAdapter`](../../../declarations/interfaces/IAdapter.md).[`run`](../../../declarations/interfaces/IAdapter.md#run)

***

### sendEventThroughDestination()

> `protected` **sendEventThroughDestination**(`context`, `eventHandler`): `Promise`\<`RawResponseType`\>

Defined in: [core/src/adapter/Adapter.ts:122](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L122)

Send the raw event through the destination.

#### Parameters

##### context

`AdapterContextType`

The event context.

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to be run.

#### Returns

`Promise`\<`RawResponseType`\>

Platform-specific response.

#### Throws

IntegrationError

***

### validateContextAndEventHandler()

> `protected` **validateContextAndEventHandler**(`context`, `eventHandler`): `void`

Defined in: [core/src/adapter/Adapter.ts:320](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/adapter/Adapter.ts#L320)

Validate the context and event handler.

#### Parameters

##### context

`AdapterContextType`

The context to validate.

##### eventHandler

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler to validate.

#### Returns

`void`

#### Throws

IntegrationError
