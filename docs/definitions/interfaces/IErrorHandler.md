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

[src/definitions.ts:380](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L380)

***

### report()

> **report**: (`error`) => `this`

#### Parameters

• **error**: `Error`

#### Returns

`this`

#### Defined in

[src/definitions.ts:379](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L379)
