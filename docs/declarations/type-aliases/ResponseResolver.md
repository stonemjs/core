[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ResponseResolver

# Type Alias: ResponseResolver()\<TOutgoingResponse\>

> **ResponseResolver**\<`TOutgoingResponse`\> = (`options`) => [`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

Defined in: [declarations.ts:812](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L812)

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
