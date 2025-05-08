[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ResponseResolver

# Type Alias: ResponseResolver()\<TOutgoingResponse\>

> **ResponseResolver**\<`TOutgoingResponse`\>: (`options`) => [`Promiseable`](Promiseable.md)\<`TOutgoingResponse`\>

Defined in: [core/src/declarations.ts:678](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L678)

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
