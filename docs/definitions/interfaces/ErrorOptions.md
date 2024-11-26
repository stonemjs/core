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

[src/definitions.ts:528](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L528)

***

### code?

> `optional` **code**: `string`

A specific error code for identifying the error.

#### Defined in

[src/definitions.ts:523](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L523)

***

### metadata?

> `optional` **metadata**: `unknown`

Additional information or context about the error.

#### Defined in

[src/definitions.ts:533](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L533)
