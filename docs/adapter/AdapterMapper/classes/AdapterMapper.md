[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [adapter/AdapterMapper](../README.md) / AdapterMapper

# Class: AdapterMapper\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, DestinationType\>

Class representing an AdapterMapper.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **DestinationType** *extends* `IncomingEventType` \| [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\> = `IncomingEventType`

## Methods

### map()

> **map**(`eventContext`): `DestinationType` \| `Promise`\<`DestinationType`\>

Transform platform-specific input into IncomingEvent
or OutgoingResponse to platform-specific output.

#### Parameters

• **eventContext**: [`AdapterContext`](../../../definitions/interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

Input data to transform via middleware.

#### Returns

`DestinationType` \| `Promise`\<`DestinationType`\>

The transformed output of type DestinationType.

#### Defined in

[src/adapter/AdapterMapper.ts:151](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterMapper.ts#L151)

***

### create()

> `static` **create**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>(`options`): [`AdapterMapper`](AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>

Create an AdapterMapper.

#### Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **DestinationType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) \| [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\> = `IncomingEventType`

#### Parameters

• **options**: [`AdapterMapperOptions`](../interfaces/AdapterMapperOptions.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>

The options to create an AdapterMapper.

#### Returns

[`AdapterMapper`](AdapterMapper.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>

A new AdapterMapper instance.

#### Defined in

[src/adapter/AdapterMapper.ts:89](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/adapter/AdapterMapper.ts#L89)
