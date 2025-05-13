[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineFactoryEventListener

# Function: defineFactoryEventListener()

> **defineFactoryEventListener**\<`TEvent`\>(`event`, `module`): [`MetaEventListener`](../../declarations/interfaces/MetaEventListener.md)\<`TEvent`\>

Defined in: [BlueprintUtils.ts:167](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L167)

Defines a factory event listener with metadata for the provided module.

## Type Parameters

### TEvent

`TEvent` *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Parameters

### event

`string`

The event name to listen for.

### module

[`FactoryEventListener`](../../declarations/type-aliases/FactoryEventListener.md)\<`TEvent`\>

The module handler function to be defined.

## Returns

[`MetaEventListener`](../../declarations/interfaces/MetaEventListener.md)\<`TEvent`\>

The defined factory event listener with metadata.
