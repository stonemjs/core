[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [resolvers](../README.md) / defaultResponseResolver

# Function: defaultResponseResolver()

> **defaultResponseResolver**(`options`): [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

Defined in: [resolvers.ts:30](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/resolvers.ts#L30)

Default response resolver function.

This function resolves the response for the application, using the options provided.
By default, it creates an `OutgoingResponse` instance with the provided options.

## Parameters

### options

[`ResponseResolverOptions`](../../declarations/type-aliases/ResponseResolverOptions.md)

## Returns

[`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

- An outgoing response instance.
