[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MetaEventHandler

# Interface: MetaEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:637](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L637)

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

Defined in: [declarations.ts:638](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L638)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:639](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L639)

***

### module

> **module**: [`EventHandlerType`](../type-aliases/EventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:640](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L640)
