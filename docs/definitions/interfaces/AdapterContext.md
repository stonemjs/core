[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / AdapterContext

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

[src/definitions.ts:445](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L445)

***

### incomingEvent?

> `readonly` `optional` **incomingEvent**: `IncomingEventType`

The incomingEvent associated with the executionContext.

#### Defined in

[src/definitions.ts:440](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L440)

***

### incomingEventBuilder?

> `readonly` `optional` **incomingEventBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

The incomingEventBuilder.

#### Defined in

[src/definitions.ts:455](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L455)

***

### outgoingResponse?

> `readonly` `optional` **outgoingResponse**: `OutgoingResponseType`

The outgoingResponse associated with the executionContext.

#### Defined in

[src/definitions.ts:450](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L450)

***

### rawEvent?

> `readonly` `optional` **rawEvent**: `RawEventType`

The rawEvent of type RawEventType.

#### Defined in

[src/definitions.ts:435](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L435)

***

### rawResponseBuilder?

> `readonly` `optional` **rawResponseBuilder**: [`IAdapterEventBuilder`](IAdapterEventBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

The rawResponseBuilder.

#### Defined in

[src/definitions.ts:460](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L460)
