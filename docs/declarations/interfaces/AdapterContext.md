[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterContext

# Interface: AdapterContext\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [core/src/declarations.ts:1128](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1128)

Class representing an AdapterContext.

## Type Parameters

• **RawEventType**

• **RawResponseType**

• **ExecutionContextType**

• **IncomingEventType** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **IncomingEventOptionsType** *extends* [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md) = [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

• **OutgoingResponseType** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### executionContext

> `readonly` **executionContext**: `ExecutionContextType`

Defined in: [core/src/declarations.ts:1149](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1149)

The executionContext of type ExecutionContextType.

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEventType`

Defined in: [core/src/declarations.ts:1154](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1154)

The incomingEvent associated with the executionContext.

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

Defined in: [core/src/declarations.ts:1164](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1164)

The incomingEventBuilder.

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponseType`

Defined in: [core/src/declarations.ts:1159](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1159)

The outgoingResponse associated with the executionContext.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [core/src/declarations.ts:1139](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1139)

The rawEvent of type RawEventType.

***

### rawResponse?

> `optional` **rawResponse**: `RawResponseType`

Defined in: [core/src/declarations.ts:1144](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1144)

The rawResponse of type RawResponseType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [core/src/declarations.ts:1169](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L1169)

The rawResponseBuilder.
