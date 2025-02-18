[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / factoryEventListener

# Function: factoryEventListener()

> **factoryEventListener**\<`TEvent`\>(`event`, `module`): [`MetaEventListener`](../../declarations/interfaces/MetaEventListener.md)\<`TEvent`\>

Defined in: [core/src/utils.ts:181](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/utils.ts#L181)

Defines a factory event listener with metadata for the provided module.

## Type Parameters

• **TEvent** *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

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
