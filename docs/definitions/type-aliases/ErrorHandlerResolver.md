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

[src/definitions.ts:305](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L305)
