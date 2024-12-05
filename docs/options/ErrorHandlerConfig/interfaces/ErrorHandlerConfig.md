[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [options/ErrorHandlerConfig](../README.md) / ErrorHandlerConfig

# Interface: ErrorHandlerConfig\<R\>

Logging options.

This interface defines the configuration options for logging, including the logger instance,
settings for duplicate error reporting, error classes to ignore, and log levels for different error classes.

## Type Parameters

• **R** = `unknown`

## Properties

### dontReport?

> `optional` **dontReport**: `Set`\<(...`args`) => `Error`\>

A set of error classes that should not be reported.
For example: new Set([TypeError])
Optional property.

#### Defined in

[src/options/ErrorHandlerConfig.ts:23](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/ErrorHandlerConfig.ts#L23)

***

### levels?

> `optional` **levels**: [`ErrorHandlerLevels`](../../../definitions/type-aliases/ErrorHandlerLevels.md)

Defines the log levels for specific error classes.
This mapping allows different log levels to be associated with different types of errors.
For example: { 'warn': [TypeError, ReferenceError] }
Optional property.

#### Defined in

[src/options/ErrorHandlerConfig.ts:31](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/ErrorHandlerConfig.ts#L31)

***

### resolver

> **resolver**: [`ErrorHandlerResolver`](../../../definitions/type-aliases/ErrorHandlerResolver.md)\<`R`\>

The class type resolver used to create instances of the errorHandler.

#### Defined in

[src/options/ErrorHandlerConfig.ts:36](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/ErrorHandlerConfig.ts#L36)

***

### withoutDuplicates?

> `optional` **withoutDuplicates**: `boolean`

Whether to avoid reporting the same error multiple times.
If set to true, errors that have already been reported will not be logged again.
Optional property.

#### Defined in

[src/options/ErrorHandlerConfig.ts:16](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/options/ErrorHandlerConfig.ts#L16)
