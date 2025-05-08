[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultResponseResolver

# Function: defaultResponseResolver()

> **defaultResponseResolver**(`options`): [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

Defined in: [core/src/resolvers.ts:31](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/resolvers.ts#L31)

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
