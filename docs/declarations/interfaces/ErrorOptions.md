[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorOptions

# Interface: ErrorOptions

Defined in: [declarations.ts:980](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L980)

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

Defined in: [declarations.ts:989](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L989)

The original error that caused this error, useful for error chaining.

***

### code?

> `optional` **code**: `string`

Defined in: [declarations.ts:984](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L984)

A specific error code for identifying the error.

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: [declarations.ts:994](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L994)

Additional information or context about the error.
