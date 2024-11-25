[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [resolvers](../README.md) / defaultErrorHandlerResolver

# Function: defaultErrorHandlerResolver()

> **defaultErrorHandlerResolver**(`blueprint`): [`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md)\<`string`\>

Default error handler resolver function.

This function resolves the error handler for the application, using the blueprint configuration.
It creates an `ErrorHandler` instance with the given blueprint, logger, and a response rendering resolver.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)\<`any`\>

The blueprint configuration to use for the error handler.

## Returns

[`IErrorHandler`](../../definitions/interfaces/IErrorHandler.md)\<`string`\>

- An `ErrorHandler` instance configured to handle errors.

## Defined in

[src/resolvers.ts:31](https://github.com/stonemjs/core/blob/aa2a76ee3b0b5f73fa20c9cec0decb9263cddbc2/src/resolvers.ts#L31)
