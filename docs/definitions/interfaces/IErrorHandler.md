[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [definitions](../README.md) / IErrorHandler

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

[src/definitions.ts:327](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/definitions.ts#L327)

***

### report()

> **report**: (`error`) => `this`

#### Parameters

• **error**: `E`

#### Returns

`this`

#### Defined in

[src/definitions.ts:326](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/definitions.ts#L326)
