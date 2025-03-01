[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterContext

# Interface: AdapterContext\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [core/src/declarations.ts:1127](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1127)

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

Defined in: [core/src/declarations.ts:1148](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1148)

The executionContext of type ExecutionContextType.

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEventType`

Defined in: [core/src/declarations.ts:1153](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1153)

The incomingEvent associated with the executionContext.

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

Defined in: [core/src/declarations.ts:1163](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1163)

The incomingEventBuilder.

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponseType`

Defined in: [core/src/declarations.ts:1158](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1158)

The outgoingResponse associated with the executionContext.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [core/src/declarations.ts:1138](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1138)

The rawEvent of type RawEventType.

***

### rawResponse?

> `optional` **rawResponse**: `RawResponseType`

Defined in: [core/src/declarations.ts:1143](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1143)

The rawResponse of type RawResponseType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [core/src/declarations.ts:1168](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1168)

The rawResponseBuilder.
