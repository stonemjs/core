[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / ErrorHandlerRenderResponseResolver

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

[src/definitions.ts:350](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L350)
