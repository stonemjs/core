[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MetaEventHandler

# Interface: MetaEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:498](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L498)

MetaEventHandler Interface.

Represents a metadata object for an app event handler.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Properties

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [core/src/declarations.ts:499](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L499)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [core/src/declarations.ts:500](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L500)

***

### module

> **module**: [`EventHandlerType`](../type-aliases/EventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:501](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L501)
