[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / ErrorHandlerRenderResponseResolver

# Type Alias: ErrorHandlerRenderResponseResolver()\<R, E\>

> **ErrorHandlerRenderResponseResolver**\<`R`, `E`\>: (`error`) => `R`

ErrorHandlerRenderResponseResolver Type.

Represents a function that resolves the response for a given error.

## Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

## Parameters

• **error**: `E`

The error instance.

## Returns

`R`

The response for the error.

## Defined in

[src/definitions.ts:350](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L350)
