[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventListener

# Type Alias: FactoryEventListener()\<TEvent\>

> **FactoryEventListener**\<`TEvent`\> = (`container`) => [`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

Defined in: [declarations.ts:499](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L499)

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
