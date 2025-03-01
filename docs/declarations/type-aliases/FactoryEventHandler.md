[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FactoryEventHandler

# Type Alias: FactoryEventHandler()\<TEvent, UResponse\>

> **FactoryEventHandler**\<`TEvent`, `UResponse`\>: (`container`) => [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:447](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L447)

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
