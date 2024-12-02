[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [definitions](../README.md) / ErrorHandlerRenderResponseResolver

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

[src/definitions.ts:350](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L350)
