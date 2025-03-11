[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ErrorOptions

# Interface: ErrorOptions

Defined in: [core/src/declarations.ts:812](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L812)

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

Defined in: [core/src/declarations.ts:821](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L821)

The original error that caused this error, useful for error chaining.

***

### code?

> `optional` **code**: `string`

Defined in: [core/src/declarations.ts:816](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L816)

A specific error code for identifying the error.

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: [core/src/declarations.ts:826](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L826)

Additional information or context about the error.
