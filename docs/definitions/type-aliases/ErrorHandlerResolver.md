[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [definitions](../README.md) / ErrorHandlerResolver

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

[src/definitions.ts:305](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/definitions.ts#L305)
