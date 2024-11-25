[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

# Class: `abstract` Adapter\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

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

## Implements

- [`IAdapter`](../../../definitions/interfaces/IAdapter.md)\<`RawResponseType`\>

## Constructors

### new Adapter()

> `protected` **new Adapter**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>(`options`): [`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

Create an Adapter.

#### Parameters

• **options**: [`AdapterOptions`](../interfaces/AdapterOptions.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

Adapter options.

#### Returns

[`Adapter`](Adapter.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:112](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L112)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/Adapter.ts:83](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L83)

***

### errorHandler

> `protected` `readonly` **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:84](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L84)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:105](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L105)

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:82](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L82)

***

### inputMapper

> `protected` `readonly` **inputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `IncomingEventType`\>

#### Defined in

[src/adapter/Adapter.ts:85](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L85)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:81](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L81)

***

### outputMapper

> `protected` `readonly` **outputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

#### Defined in

[src/adapter/Adapter.ts:95](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L95)

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

[src/adapter/Adapter.ts:227](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L227)

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

[src/adapter/Adapter.ts:262](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L262)

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Hook that runs once before everything.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:218](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L218)

***

### onRawEventReceived()

> `protected` **onRawEventReceived**(`eventHandler`, `context`): `Promise`\<`RawResponseType`\>

Incoming message listener.

#### Parameters

• **eventHandler**: [`EventHandlerFunction`](../../../definitions/type-aliases/EventHandlerFunction.md)\<`IncomingEventType`, `OutgoingResponseType`\> \| [`LifecycleEventHandler`](../../../definitions/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

• **context**: [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

The event context.

#### Returns

`Promise`\<`RawResponseType`\>

Platform-specific output.

#### Defined in

[src/adapter/Adapter.ts:178](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L178)

***

### onTerminate()

> `protected` **onTerminate**(`eventHandler`, `_adapterContext`): `Promise`\<`void`\>

Hook that runs after running the action handler.

#### Parameters

• **eventHandler**: [`LifecycleEventHandler`](../../../definitions/interfaces/LifecycleEventHandler.md)\<`IncomingEventType`, `OutgoingResponseType`\>

Action handler to be run.

• **\_adapterContext**: [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

The event context.

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/adapter/Adapter.ts:240](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L240)

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
const eventHandler = this.handlerResolver(this.blueprint);
await this.beforeHandle(eventHandler as LifecycleEventHandler<IncomingEventType, OutgoingResponseType>);
return await this.onRawEventReceived(eventHandler, {});
```

#### Implementation of

[`IAdapter`](../../../definitions/interfaces/IAdapter.md).[`run`](../../../definitions/interfaces/IAdapter.md#run)

#### Defined in

[src/adapter/Adapter.ts:169](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/adapter/Adapter.ts#L169)
