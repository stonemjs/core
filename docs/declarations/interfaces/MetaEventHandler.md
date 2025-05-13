[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MetaEventHandler

# Interface: MetaEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:498](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L498)

MetaEventHandler Interface.

Represents a metadata object for an app event handler.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [declarations.ts:499](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L499)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:500](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L500)

***

### module

> **module**: [`EventHandlerType`](../type-aliases/EventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:501](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L501)
