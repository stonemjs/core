[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, AdapterContextType\>

Defined in: [adapter/Adapter.ts:55](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L55)

Class representing an Adapter.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### IncomingEventOptionsType

`IncomingEventOptionsType` *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

### AdapterContextType

`AdapterContextType` *extends* [`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\> = [`AdapterContext`](../../../declarations/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

## Implements

- [`IAdapter`](../../../declarations/interfaces/IAdapter.md)

## Constructors

### Constructor

> `protected` **new Adapter**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>(`blueprint`): `Adapter`\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

Defined in: [adapter/Adapter.ts:87](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L87)

Create an Adapter.

#### Parameters

##### blueprint

[`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

The blueprint to create the adapter.

#### Returns

`Adapter`\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `AdapterContextType`\>

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

Defined in: [adapter/Adapter.ts:87](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L87)

The blueprint to create the adapter.

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHookType`](../../../declarations/interfaces/AdapterHookType.md)\<`AdapterContextType`, `RawResponseType`\>

Defined in: [adapter/Adapter.ts:78](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L78)

***

### middleware

> `protected` `readonly` **middleware**: [`AdapterMixedPipeType`](../../../declarations/type-aliases/AdapterMixedPipeType.md)\<`AdapterContextType`, `RawResponseType`\>[]

Defined in: [adapter/Adapter.ts:79](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L79)

***

### resolvedErrorHandlers

> `protected` `readonly` **resolvedErrorHandlers**: `Record`\<`string`, [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>\>

Defined in: [adapter/Adapter.ts:80](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L80)

## Methods

### buildRawResponse()

> `protected` **buildRawResponse**(`context`, `eventHandler?`): `Promise`\<`RawResponseType`\>

Defined in: [adapter/Adapter.ts:193](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L193)

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

Defined in: [adapter/Adapter.ts:286](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L286)

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

> `protected` **executeHooks**(`name`, `context?`, `error?`): `Promise`\<`void`\>

Defined in: [adapter/Adapter.ts:302](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L302)

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

Defined in: [adapter/Adapter.ts:181](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L181)

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

Defined in: [adapter/Adapter.ts:151](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L151)

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

Defined in: [adapter/Adapter.ts:213](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L213)

Create pipeline options for the Adapter.

#### Returns

`PipelineOptions`\<`AdapterContextType`, [`IAdapterEventBuilder`](../../../declarations/interfaces/IAdapterEventBuilder.md)\<[`RawResponseOptions`](../../../declarations/interfaces/RawResponseOptions.md), [`IRawResponseWrapper`](../../../declarations/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>\>

The pipeline options for transforming the event.

***

### resolveErrorHandler()

> `protected` **resolveErrorHandler**(`error`): [`IAdapterErrorHandler`](../../../declarations/interfaces/IAdapterErrorHandler.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`\>

Defined in: [adapter/Adapter.ts:260](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L260)

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

Defined in: [adapter/Adapter.ts:235](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L235)

Get the event handler for the adapter.

#### Returns

[`AdapterEventHandlerType`](../../../declarations/type-aliases/AdapterEventHandlerType.md)\<`IncomingEventType`, `OutgoingResponseType`\>

The event handler for the adapter.

#### Throws

If the event handler is missing.

***

### run()

> `abstract` **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [adapter/Adapter.ts:113](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L113)

Run handler.

#### Type Parameters

##### ExecutionResultType

`ExecutionResultType` = `unknown`

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

Defined in: [adapter/Adapter.ts:123](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L123)

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

Defined in: [adapter/Adapter.ts:321](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/adapter/Adapter.ts#L321)

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
