[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / ErrorOptions

# Interface: ErrorOptions

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

The original error that caused this error, useful for error chaining.

#### Defined in

[src/definitions.ts:486](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L486)

***

### code?

> `optional` **code**: `string`

A specific error code for identifying the error.

#### Defined in

[src/definitions.ts:481](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L481)

***

### metadata?

> `optional` **metadata**: `unknown`

Additional information or context about the error.

#### Defined in

[src/definitions.ts:491](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L491)
