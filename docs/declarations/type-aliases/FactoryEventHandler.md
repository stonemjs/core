[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventHandler

# Type Alias: FactoryEventHandler()\<TEvent, UResponse\>

> **FactoryEventHandler**\<`TEvent`, `UResponse`\> = (`container`) => [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:615](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L615)

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
