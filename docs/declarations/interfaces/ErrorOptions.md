[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ErrorOptions

# Interface: ErrorOptions

Defined in: [declarations.ts:594](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L594)

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

Defined in: [declarations.ts:603](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L603)

The original error that caused this error, useful for error chaining.

***

### code?

> `optional` **code**: `string`

Defined in: [declarations.ts:598](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L598)

A specific error code for identifying the error.

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: [declarations.ts:608](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L608)

Additional information or context about the error.
