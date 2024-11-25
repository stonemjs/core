[**Core Documentation v0.0.2**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../../modules.md) / [adapter/AdapterMapper](../README.md) / AdapterMapperOptions

# Interface: AdapterMapperOptions\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, DestinationType\>

AdapterMapperOptions.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **DestinationType** *extends* `IncomingEventType` \| [`IRawResponseWrapper`](../../../definitions/interfaces/IRawResponseWrapper.md)\<`RawResponseType`\> = `IncomingEventType`

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/adapter/AdapterMapper.ts:28](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/AdapterMapper.ts#L28)

***

### destinationResolver

> **destinationResolver**: [`AdapterMapperDestinationResolver`](../../../definitions/type-aliases/AdapterMapperDestinationResolver.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>

#### Defined in

[src/adapter/AdapterMapper.ts:30](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/AdapterMapper.ts#L30)

***

### middleware

> **middleware**: `MixedPipe`[]

#### Defined in

[src/adapter/AdapterMapper.ts:29](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/adapter/AdapterMapper.ts#L29)
