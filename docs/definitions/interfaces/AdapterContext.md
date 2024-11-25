[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / AdapterContext

# Interface: AdapterContext\<RawEventType, RawResponseType, ExecutionContext, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Class representing an AdapterContext.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContext**

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md) = [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### executionContext?

> `readonly` `optional` **executionContext**: `ExecutionContext`

The executionContext of type ExecutionContext.

#### Defined in

[src/definitions.ts:498](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L498)

***

### incomingEvent?

> `readonly` `optional` **incomingEvent**: `IncomingEventType`

The incomingEvent associated with the executionContext.

#### Defined in

[src/definitions.ts:493](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L493)

***

### incomingEventBuilder?

> `readonly` `optional` **incomingEventBuilder**: [`IAdapterBuilder`](IAdapterBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

The incomingEventBuilder.

#### Defined in

[src/definitions.ts:508](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L508)

***

### outgoingResponse?

> `readonly` `optional` **outgoingResponse**: `OutgoingResponseType`

The outgoingResponse associated with the executionContext.

#### Defined in

[src/definitions.ts:503](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L503)

***

### rawEvent?

> `readonly` `optional` **rawEvent**: `RawEventType`

The rawEvent of type RawEventType.

#### Defined in

[src/definitions.ts:488](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L488)

***

### rawResponseBuilder?

> `readonly` `optional` **rawResponseBuilder**: [`IAdapterBuilder`](IAdapterBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

The rawResponseBuilder.

#### Defined in

[src/definitions.ts:513](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L513)
