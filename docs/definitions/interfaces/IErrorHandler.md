[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / IErrorHandler

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

[src/definitions.ts:380](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L380)

***

### report()

> **report**: (`error`) => `this`

#### Parameters

• **error**: `Error`

#### Returns

`this`

#### Defined in

[src/definitions.ts:379](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L379)
