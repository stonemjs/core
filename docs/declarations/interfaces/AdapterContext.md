[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterContext

# Interface: AdapterContext\<RawEventType, RawResponseType, ExecutionContextType, IncomingEventType, IncomingEventOptionsType, OutgoingResponseType\>

Defined in: [declarations.ts:523](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L523)

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

Defined in: [declarations.ts:544](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L544)

The executionContext of type ExecutionContextType.

***

### incomingEvent?

> `optional` **incomingEvent**: `IncomingEventType`

Defined in: [declarations.ts:549](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L549)

The incomingEvent associated with the executionContext.

***

### incomingEventBuilder

> `readonly` **incomingEventBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

Defined in: [declarations.ts:559](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L559)

The incomingEventBuilder.

***

### outgoingResponse?

> `optional` **outgoingResponse**: `OutgoingResponseType`

Defined in: [declarations.ts:554](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L554)

The outgoingResponse associated with the executionContext.

***

### rawEvent

> `readonly` **rawEvent**: `RawEventType`

Defined in: [declarations.ts:534](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L534)

The rawEvent of type RawEventType.

***

### rawResponse?

> `optional` **rawResponse**: `RawResponseType`

Defined in: [declarations.ts:539](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L539)

The rawResponse of type RawResponseType.

***

### rawResponseBuilder

> `readonly` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

Defined in: [declarations.ts:564](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L564)

The rawResponseBuilder.
