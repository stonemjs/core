[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorOptions

# Interface: ErrorOptions

Defined in: [declarations.ts:841](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L841)

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

Defined in: [declarations.ts:850](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L850)

The original error that caused this error, useful for error chaining.

***

### code?

> `optional` **code**: `string`

Defined in: [declarations.ts:845](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L845)

A specific error code for identifying the error.

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: [declarations.ts:855](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L855)

Additional information or context about the error.
