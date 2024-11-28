[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / AdapterContext

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

[src/definitions.ts:460](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L460)

***

### incomingEvent?

> `readonly` `optional` **incomingEvent**: `IncomingEventType`

The incomingEvent associated with the executionContext.

#### Defined in

[src/definitions.ts:455](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L455)

***

### incomingEventBuilder?

> `readonly` `optional` **incomingEventBuilder**: [`IAdapterBuilder`](IAdapterBuilder.md)\<`IncomingEventOptionsType`, `IncomingEventType`\>

The incomingEventBuilder.

#### Defined in

[src/definitions.ts:470](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L470)

***

### outgoingResponse?

> `readonly` `optional` **outgoingResponse**: `OutgoingResponseType`

The outgoingResponse associated with the executionContext.

#### Defined in

[src/definitions.ts:465](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L465)

***

### rawEvent?

> `readonly` `optional` **rawEvent**: `RawEventType`

The rawEvent of type RawEventType.

#### Defined in

[src/definitions.ts:450](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L450)

***

### rawResponseBuilder?

> `readonly` `optional` **rawResponseBuilder**: [`IAdapterBuilder`](IAdapterBuilder.md)\<[`RawResponseOptions`](RawResponseOptions.md), [`IRawResponseWrapper`](IRawResponseWrapper.md)\<`RawResponseType`\>\>

The rawResponseBuilder.

#### Defined in

[src/definitions.ts:475](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L475)
