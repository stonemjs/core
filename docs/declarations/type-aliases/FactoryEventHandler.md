[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FactoryEventHandler

# Type Alias: FactoryEventHandler()\<TEvent, UResponse\>

> **FactoryEventHandler**\<`TEvent`, `UResponse`\>: (`container`) => [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:476](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L476)

FactoryEventHandler.

Represents a factory function that creates an event handler function.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

The event handler function.
