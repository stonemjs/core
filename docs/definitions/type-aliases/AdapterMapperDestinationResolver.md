[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / AdapterMapperDestinationResolver

# Type Alias: AdapterMapperDestinationResolver()\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType, DestinationType\>

> **AdapterMapperDestinationResolver**\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`, `DestinationType`\>: (`eventContext`) => `DestinationType`

Adapter Mapper Destination Resolver.

A type alias representing a function that takes an event context and returns the resolved destination.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

• **DestinationType** *extends* `IncomingEventType` \| [`IRawResponseWrapper`](../interfaces/IRawResponseWrapper.md)\<`RawResponseType`\> = `IncomingEventType`

## Parameters

• **eventContext**: [`AdapterContext`](../interfaces/AdapterContext.md)\<`RawEventType`, `RawResponseType`, `ExecutionContextType`, `IncomingEventType`, `IncomingEventOptionsType`, `OutgoingResponseType`\>

The AdapterContext instance containing details of the event.

## Returns

`DestinationType`

The resolved destination value.

## Defined in

[src/definitions.ts:147](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L147)
