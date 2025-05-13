[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / FactoryErrorHandler

# Type Alias: FactoryErrorHandler()\<TEvent, UResponse\>

> **FactoryErrorHandler**\<`TEvent`, `UResponse`\> = (`container`) => [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:729](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L729)

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
