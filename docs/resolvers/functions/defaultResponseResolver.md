[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [resolvers](../README.md) / defaultResponseResolver

# Function: defaultResponseResolver()

> **defaultResponseResolver**(`options`): [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

Defined in: [resolvers.ts:31](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/resolvers.ts#L31)

Default response resolver function.

This function resolves the response for the application, using the options provided.
By default, it creates an `OutgoingResponse` instance with the provided options.

## Parameters

### options

[`ResponseResolverOptions`](../../declarations/type-aliases/ResponseResolverOptions.md)

The options to create the response.

## Returns

[`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

An outgoing response instance.
