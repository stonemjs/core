[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MetaErrorHandler

# Interface: MetaErrorHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:721](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L721)

MetaErrorHandler Interface.

Represents a metadata object for an error handler.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [core/src/declarations.ts:722](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L722)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [core/src/declarations.ts:723](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L723)

***

### module

> **module**: [`ErrorHandlerType`](../type-aliases/ErrorHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:724](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L724)
