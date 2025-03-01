[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ResponseResolver

# Type Alias: ResponseResolver()\<TOutgoingResponse\>

> **ResponseResolver**\<`TOutgoingResponse`\>: (`options`) => [`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

Defined in: [core/src/declarations.ts:649](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L649)

ResponseResolver Type.

Represents a function that resolves an outgoing response based on the provided options.

## Type Parameters

• **TOutgoingResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### options

[`ResponseResolverOptions`](ResponseResolverOptions.md)

The outgoing response options.

## Returns

[`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

The outgoing response.
