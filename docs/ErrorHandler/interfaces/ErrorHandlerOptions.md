[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [ErrorHandler](../README.md) / ErrorHandlerOptions

# Interface: ErrorHandlerOptions\<R, E\>

ErrorHandlerOptions.

## Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

#### Defined in

[src/ErrorHandler.ts:10](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/ErrorHandler.ts#L10)

***

### logger

> **logger**: [`ILogger`](../../definitions/interfaces/ILogger.md)

#### Defined in

[src/ErrorHandler.ts:9](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/ErrorHandler.ts#L9)

***

### renderResponseResolver

> **renderResponseResolver**: [`ErrorHandlerRenderResponseResolver`](../../definitions/type-aliases/ErrorHandlerRenderResponseResolver.md)\<`R`, `E`\>

#### Defined in

[src/ErrorHandler.ts:11](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/ErrorHandler.ts#L11)
