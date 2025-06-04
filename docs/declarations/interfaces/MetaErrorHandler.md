[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MetaErrorHandler

# Interface: MetaErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:888](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L888)

MetaErrorHandler Interface.

Represents a metadata object for an error handler.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [declarations.ts:889](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L889)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:890](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L890)

***

### module

> **module**: [`ErrorHandlerType`](../type-aliases/ErrorHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:891](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L891)
