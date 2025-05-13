[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ResponseResolver

# Type Alias: ResponseResolver()\<TOutgoingResponse\>

> **ResponseResolver**\<`TOutgoingResponse`\> = (`options`) => [`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

Defined in: [declarations.ts:678](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L678)

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
