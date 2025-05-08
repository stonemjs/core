[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MixedEventHandler

# Type Alias: MixedEventHandler\<TEvent, UResponse\>

> **MixedEventHandler**\<`TEvent`, `UResponse`\>: [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`MetaEventHandler`](../interfaces/MetaEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:511](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L511)

MixedEventHandler Type.

Represents an event handler that can either be a simple function or a meta event handler.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Template

UResponse
