[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / IErrorHandler

# Interface: IErrorHandler\<R, E\>

ErrorHandler Interface.

Represents an error handler that provides methods to report and render errors.

## Type Parameters

• **R**

• **E** *extends* [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md) = [`RuntimeError`](../../errors/RuntimeError/classes/RuntimeError.md)

## Properties

### render()

> **render**: (`error`) => `R`

#### Parameters

• **error**: `E`

#### Returns

`R`

#### Defined in

[src/definitions.ts:327](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L327)

***

### report()

> **report**: (`error`) => `this`

#### Parameters

• **error**: `E`

#### Returns

`this`

#### Defined in

[src/definitions.ts:326](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L326)
