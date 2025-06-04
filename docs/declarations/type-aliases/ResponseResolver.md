[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ResponseResolver

# Type Alias: ResponseResolver()\<TOutgoingResponse\>

> **ResponseResolver**\<`TOutgoingResponse`\> = (`options`) => [`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

Defined in: [declarations.ts:817](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L817)

ResponseResolver Type.

Represents a function that resolves an outgoing response based on the provided options.

## Type Parameters

### TOutgoingResponse

`TOutgoingResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### options

[`ResponseResolverOptions`](ResponseResolverOptions.md)

The outgoing response options.

## Returns

[`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

The outgoing response.
