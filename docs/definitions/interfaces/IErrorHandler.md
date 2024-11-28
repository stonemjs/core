[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IErrorHandler

# Interface: IErrorHandler\<R\>

ErrorHandler Interface.

Represents an error handler that provides methods to report and render errors.

## Type Parameters

• **R**

## Properties

### render()

> **render**: (`error`) => `R`

#### Parameters

• **error**: `Error`

#### Returns

`R`

#### Defined in

[src/definitions.ts:342](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L342)

***

### report()

> **report**: (`error`) => `this`

#### Parameters

• **error**: `Error`

#### Returns

`this`

#### Defined in

[src/definitions.ts:341](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L341)
