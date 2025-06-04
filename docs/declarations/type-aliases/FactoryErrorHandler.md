[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryErrorHandler

# Type Alias: FactoryErrorHandler()\<TEvent, UResponse\>

> **FactoryErrorHandler**\<`TEvent`, `UResponse`\> = (`container`) => [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:868](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L868)

FactoryErrorHandler Type.

Represents a factory function that creates an error handler function.

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

[`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

The error handler function.
