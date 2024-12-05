[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [resolvers](../README.md) / defaultErrorHandlerResolver

# Function: defaultErrorHandlerResolver()

> **defaultErrorHandlerResolver**(`blueprint`): [`ErrorHandler`](../../ErrorHandler/classes/ErrorHandler.md)\<`string`\>

Default error handler resolver function.

This function resolves the error handler for the application, using the blueprint configuration.
It creates an `ErrorHandler` instance with the given blueprint, logger, and a response rendering resolver.

## Parameters

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

The blueprint configuration to use for the error handler.

## Returns

[`ErrorHandler`](../../ErrorHandler/classes/ErrorHandler.md)\<`string`\>

- An `ErrorHandler` instance configured to handle errors.

## Defined in

[src/resolvers.ts:32](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/resolvers.ts#L32)
