[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FactoryErrorHandler

# Type Alias: FactoryErrorHandler()\<TEvent, UResponse\>

> **FactoryErrorHandler**\<`TEvent`, `UResponse`\>: (`container`) => [`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:729](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L729)

FactoryErrorHandler Type.

Represents a factory function that creates an error handler function.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### container

The dependency injection container.

[`IContainer`](IContainer.md) | `any`

## Returns

[`FunctionalErrorHandler`](FunctionalErrorHandler.md)\<`TEvent`, `UResponse`\>

The error handler function.
