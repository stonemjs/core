[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FactoryEventListener

# Type Alias: FactoryEventListener()\<TEvent\>

> **FactoryEventListener**\<`TEvent`\>: (`container`) => [`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

Defined in: [core/src/declarations.ts:360](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L360)

Represents a FactoryEventListener type.

## Type Parameters

• **TEvent** *extends* [`Event`](../../events/Event/classes/Event.md) = [`Event`](../../events/Event/classes/Event.md)

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`FunctionalEventListener`](FunctionalEventListener.md)\<`TEvent`\>

The event listener function.
