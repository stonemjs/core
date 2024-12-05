[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [ErrorHandler](../README.md) / ErrorHandlerOptions

# Interface: ErrorHandlerOptions\<R, E\>

ErrorHandlerOptions.

## Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/ErrorHandler.ts:10](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L10)

***

### logger

> **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/ErrorHandler.ts:9](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L9)

***

### renderResponseResolver

> **renderResponseResolver**: [`ErrorHandlerRenderResponseResolver`](../../definitions/type-aliases/ErrorHandlerRenderResponseResolver.md)\<`R`, `E`\>

#### Defined in

[src/ErrorHandler.ts:11](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/ErrorHandler.ts#L11)
