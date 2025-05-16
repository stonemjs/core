[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MetaErrorHandler

# Interface: MetaErrorHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:883](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L883)

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

Defined in: [declarations.ts:884](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L884)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:885](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L885)

***

### module

> **module**: [`ErrorHandlerType`](../type-aliases/ErrorHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:886](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L886)
