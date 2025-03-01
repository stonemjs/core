[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultResponseResolver

# Function: defaultResponseResolver()

> **defaultResponseResolver**(`options`): [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

Defined in: [core/src/resolvers.ts:31](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/resolvers.ts#L31)

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
