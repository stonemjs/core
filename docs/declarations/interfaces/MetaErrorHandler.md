[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MetaErrorHandler

# Interface: MetaErrorHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:749](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L749)

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

Defined in: [core/src/declarations.ts:750](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L750)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [core/src/declarations.ts:751](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L751)

***

### module

> **module**: [`ErrorHandlerType`](../type-aliases/ErrorHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:752](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L752)
