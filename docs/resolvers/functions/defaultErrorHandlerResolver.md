[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [resolvers](../README.md) / defaultErrorHandlerResolver

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

[src/resolvers.ts:30](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/resolvers.ts#L30)
