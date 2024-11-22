[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [options/ErrorHandlerConfig](../README.md) / ErrorHandlerConfig

# Interface: ErrorHandlerConfig

Logging options.

This interface defines the configuration options for logging, including the logger instance,
settings for duplicate error reporting, error classes to ignore, and log levels for different error classes.

## Properties

### dontReport

> **dontReport**: `Set`\<(...`args`) => `Error`\>

A set of error classes that should not be reported.
For example: new Set([TypeError])

#### Defined in

[src/options/ErrorHandlerConfig.ts:21](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/ErrorHandlerConfig.ts#L21)

***

### levels

> **levels**: [`ErrorHandlerLevels`](../../../definitions/type-aliases/ErrorHandlerLevels.md)

Defines the log levels for specific error classes.
This mapping allows different log levels to be associated with different types of errors.
For example: { 'warn': [TypeError, ReferenceError] }

#### Defined in

[src/options/ErrorHandlerConfig.ts:28](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/ErrorHandlerConfig.ts#L28)

***

### resolver?

> `optional` **resolver**: [`ErrorHandlerResolver`](../../../definitions/type-aliases/ErrorHandlerResolver.md)

#### Defined in

[src/options/ErrorHandlerConfig.ts:30](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/ErrorHandlerConfig.ts#L30)

***

### withoutDuplicates

> **withoutDuplicates**: `boolean`

Whether to avoid reporting the same error multiple times.
If set to true, errors that have already been reported will not be logged again.

#### Defined in

[src/options/ErrorHandlerConfig.ts:15](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/options/ErrorHandlerConfig.ts#L15)
