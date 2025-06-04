[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MixedListenerHandler

# Type Alias: MixedListenerHandler\<TEventType, UEventName\>

> **MixedListenerHandler**\<`TEventType`, `UEventName`\> = [`ListenerHandler`](ListenerHandler.md)\<`TEventType`\> \| [`WildcardListenerHandler`](WildcardListenerHandler.md)\<`UEventName`, `TEventType`\>

Defined in: [declarations.ts:1015](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1015)

Represents a listener handler that can either be a simple function or a wildcard function.

## Type Parameters

### TEventType

`TEventType` *extends* [`Event`](../../events/Event/classes/Event.md)

### UEventName

`UEventName`
