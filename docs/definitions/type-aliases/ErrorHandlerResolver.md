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

[src/definitions.ts:309](https://github.com/stonemjs/core/blob/c4dbb69a8c86aa6134b62f7d9cac7dabb444c749/src/definitions.ts#L309)
