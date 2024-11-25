[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / ErrorOptions

# Interface: ErrorOptions

Represents options for configuring an error.

## Properties

### cause?

> `optional` **cause**: `Error`

The original error that caused this error, useful for error chaining.

#### Defined in

[src/definitions.ts:528](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L528)

***

### code?

> `optional` **code**: `string`

A specific error code for identifying the error.

#### Defined in

[src/definitions.ts:523](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L523)

***

### metadata?

> `optional` **metadata**: `unknown`

Additional information or context about the error.

#### Defined in

[src/definitions.ts:533](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L533)
