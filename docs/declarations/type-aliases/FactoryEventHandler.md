[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryEventHandler

# Type Alias: FactoryEventHandler()\<TEvent, UResponse\>

> **FactoryEventHandler**\<`TEvent`, `UResponse`\> = (`container`) => [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:476](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L476)

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
