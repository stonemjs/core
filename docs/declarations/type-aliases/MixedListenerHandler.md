[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / MixedListenerHandler

# Type Alias: MixedListenerHandler\<TEventType, UEventName\>

> **MixedListenerHandler**\<`TEventType`, `UEventName`\>: [`ListenerHandler`](ListenerHandler.md)\<`TEventType`\> \| [`WildcardListenerHandler`](WildcardListenerHandler.md)\<`UEventName`, `TEventType`\>

Defined in: [core/src/declarations.ts:846](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L846)

Represents a listener handler that can either be a simple function or a wildcard function.

## Type Parameters

• **TEventType** *extends* [`Event`](../../events/Event/classes/Event.md)

• **UEventName**
