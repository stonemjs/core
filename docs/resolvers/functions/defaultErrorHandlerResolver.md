[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [resolvers](../README.md) / defaultErrorHandlerResolver

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

[src/resolvers.ts:31](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/resolvers.ts#L31)
