[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / AdapterContext

# Interface: AdapterContext\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [declarations.ts:1308](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1308)

Class representing an AdapterContext.

## Type Parameters

### RawEventType

`RawEventType`

### RawResponseType

`RawResponseType`

### ExecutionContextType

`ExecutionContextType`

### IncomingEventType

`IncomingEventType` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### IncomingEventOptionsType

`IncomingEventOptionsType` *extends* [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md) = [`IncomingEventOptions`](../../events/IncomingEvent/interfaces/IncomingEventOptions.md)

### OutgoingResponseType

`OutgoingResponseType` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### executionContext

> `readonly` **executionContext**: `ExecutionContextType`

Defined in: [declarations.ts:1329](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1329)

The executionContext of type ExecutionContextType.

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEventType`

Defined in: [declarations.ts:1334](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1334)

The incomingEvent associated with the executionContext.

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

Defined in: [declarations.ts:1344](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1344)

The incomingEventBuilder.

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponseType`

Defined in: [declarations.ts:1339](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1339)

The outgoingResponse associated with the executionContext.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:1319](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1319)

The rawEvent of type RawEventType.

***

### rawResponse?

> `optional` **rawResponse**: `RawResponseType`

Defined in: [declarations.ts:1324](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1324)

The rawResponse of type RawResponseType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:1349](https://github.com/stonemjs/core/blob/3581a30de158e951ead319c3cc6abead0be9639f/src/declarations.ts#L1349)

The rawResponseBuilder.
