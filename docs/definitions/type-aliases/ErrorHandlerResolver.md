[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / ErrorHandlerResolver

# Type Alias: ErrorHandlerResolver()\<R\>

> **ErrorHandlerResolver**\<`R`\>: (`blueprint`) => [`IErrorHandler`](../interfaces/IErrorHandler.md)\<`R`\>

ErrorHandlerResolver Type.

Represents a function that resolves an error handler based on the provided blueprint.

## Type Parameters

• **R** = `unknown`

## Parameters

• **blueprint**: [`IBlueprint`](IBlueprint.md)

The application blueprint.

## Returns

[`IErrorHandler`](../interfaces/IErrorHandler.md)\<`R`\>

The error handler instance.

## Defined in

[src/definitions.ts:336](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L336)
