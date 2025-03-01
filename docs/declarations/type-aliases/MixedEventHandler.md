[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MixedEventHandler

# Type Alias: MixedEventHandler\<TEvent, UResponse\>

> **MixedEventHandler**\<`TEvent`, `UResponse`\>: [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`MetaEventHandler`](../interfaces/MetaEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:482](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L482)

MixedEventHandler Type.

Represents an event handler that can either be a simple function or a meta event handler.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Template

UResponse
