[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MixedEventHandler

# Type Alias: MixedEventHandler\<TEvent, UResponse\>

> **MixedEventHandler**\<`TEvent`, `UResponse`\>: [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`MetaEventHandler`](../interfaces/MetaEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:483](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L483)

MixedEventHandler Type.

Represents an event handler that can either be a simple function or a meta event handler.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Template

UResponse
