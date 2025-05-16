[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventListener

# Type Alias: FactoryEventListener()\<TEvent\>

> **FactoryEventListener**\<`TEvent`\> = (`container`) => [`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

Defined in: [declarations.ts:494](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L494)

Represents a FactoryEventListener type.

## Type Parameters

### TEvent

`TEvent` *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

The event listener function.
