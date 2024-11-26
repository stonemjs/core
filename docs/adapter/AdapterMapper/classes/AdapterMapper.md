[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [adapter/AdapterMapper](../README.md) / AdapterMapper

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

[src/adapter/AdapterMapper.ts:152](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/adapter/AdapterMapper.ts#L152)

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

[src/adapter/AdapterMapper.ts:90](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/adapter/AdapterMapper.ts#L90)
