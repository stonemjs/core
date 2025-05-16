[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MixedListenerHandler

# Type Alias: MixedListenerHandler\<TEventType, UEventName\>

> **MixedListenerHandler**\<`TEventType`, `UEventName`\> = [`ListenerHandler`](ListenerHandler.md)\<`TEventType`\> \| [`WildcardListenerHandler`](WildcardListenerHandler.md)\<`UEventName`, `TEventType`\>

Defined in: [declarations.ts:1010](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L1010)

Represents a listener handler that can either be a simple function or a wildcard function.

## Type Parameters

### TEventType

`TEventType` *extends* [`Event`](../../events/Event/classes/Event.md)

### UEventName

`UEventName`
