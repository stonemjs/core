[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineFactoryEventListener

# Function: defineFactoryEventListener()

> **defineFactoryEventListener**\<`TEvent`\>(`event`, `module`): [`MetaEventListener`](../../declarations/interfaces/MetaEventListener.md)\<`TEvent`\>

Defined in: core/src/BlueprintUtils.ts:167

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
