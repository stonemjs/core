[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [adapter/Adapter](../README.md) / Adapter

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

[src/adapter/Adapter.ts:111](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L111)

## Properties

### blueprint

> `protected` `readonly` **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/Adapter.ts:82](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L82)

***

### errorHandler

> `protected` `readonly` **errorHandler**: [`IErrorHandler`](../../../definitions/interfaces/IErrorHandler.md)\<`RawResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:83](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L83)

***

### handlerResolver

> `protected` `readonly` **handlerResolver**: [`AdapterHandlerResolver`](../../../definitions/type-aliases/AdapterHandlerResolver.md)\<`IncomingEventType`, `OutgoingResponseType`\>

#### Defined in

[src/adapter/Adapter.ts:104](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L104)

***

### hooks

> `protected` `readonly` **hooks**: [`AdapterHooks`](../../../definitions/interfaces/AdapterHooks.md)

#### Defined in

[src/adapter/Adapter.ts:81](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L81)

***

### inputMapper

> `protected` `readonly` **inputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `IncomingEventType`\>

#### Defined in

[src/adapter/Adapter.ts:84](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L84)

***

### logger

> `protected` `readonly` **logger**: [`ILogger`](../../../definitions/interfaces/ILogger.md)

#### Defined in

[src/adapter/Adapter.ts:80](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L80)

***

### outputMapper

> `protected` `readonly` **outputMapper**: [`AdapterMapper`](../../AdapterMapper/classes/AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\>\>

#### Defined in

[src/adapter/Adapter.ts:94](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L94)

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

[src/adapter/Adapter.ts:228](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L228)

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

[src/adapter/Adapter.ts:263](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L263)

***

### onInit()

> `protected` **onInit**(): `Promise`\<`void`\>

Hook that runs once before everything.

#### Returns

`Promise`\<`void`\>

#### Throws

#### Defined in

[src/adapter/Adapter.ts:219](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L219)

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

[src/adapter/Adapter.ts:177](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L177)

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

[src/adapter/Adapter.ts:241](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L241)

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

[src/adapter/Adapter.ts:168](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/adapter/Adapter.ts#L168)
