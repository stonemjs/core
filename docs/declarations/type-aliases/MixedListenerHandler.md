[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MixedListenerHandler

# Type Alias: MixedListenerHandler\<TEventType, UEventName\>

> **MixedListenerHandler**\<`TEventType`, `UEventName`\>: [`ListenerHandler`](ListenerHandler.md)\<`TEventType`\> \| [`WildcardListenerHandler`](WildcardListenerHandler.md)\<`UEventName`, `TEventType`\>

Defined in: [core/src/declarations.ts:847](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L847)

Represents a listener handler that can either be a simple function or a wildcard function.

## Type Parameters

• **TEventType** *extends* [`Event`](../../events/Event/classes/Event.md)

• **UEventName**
