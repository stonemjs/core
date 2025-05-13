[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MetaErrorHandler

# Interface: MetaErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:749](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L749)

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

Defined in: [declarations.ts:750](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L750)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:751](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L751)

***

### module

> **module**: [`ErrorHandlerType`](../type-aliases/ErrorHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:752](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L752)
