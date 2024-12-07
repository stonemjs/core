[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [definitions](../README.md) / ErrorHandlerRenderResponseResolver

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

[src/definitions.ts:350](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/definitions.ts#L350)
