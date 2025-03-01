[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MetaEventHandler

# Interface: MetaEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:469](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L469)

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

Defined in: [core/src/declarations.ts:470](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L470)

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [core/src/declarations.ts:471](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L471)

***

### module

> **module**: [`EventHandlerType`](../type-aliases/EventHandlerType.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:472](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L472)
