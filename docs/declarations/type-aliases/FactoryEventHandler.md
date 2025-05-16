[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventHandler

# Type Alias: FactoryEventHandler()\<TEvent, UResponse\>

> **FactoryEventHandler**\<`TEvent`, `UResponse`\> = (`container`) => [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:610](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L610)

FactoryEventHandler.

Represents a factory function that creates an event handler function.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

The event handler function.
