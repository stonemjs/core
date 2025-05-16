[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ErrorOptions

# Interface: ErrorOptions

Defined in: [declarations.ts:975](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L975)

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

Defined in: [declarations.ts:984](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L984)

The original error that caused this error, useful for error chaining.

***

### code?

> `optional` **code**: `string`

Defined in: [declarations.ts:979](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L979)

A specific error code for identifying the error.

***

### metadata?

> `optional` **metadata**: `unknown`

Defined in: [declarations.ts:989](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L989)

Additional information or context about the error.
