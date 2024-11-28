[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / ErrorHandlerResolver

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

[src/definitions.ts:309](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L309)
