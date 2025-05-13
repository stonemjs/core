[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventListener

# Type Alias: FactoryEventListener()\<TEvent\>

> **FactoryEventListener**\<`TEvent`\> = (`container`) => [`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

Defined in: [declarations.ts:360](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L360)

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
