[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineClassMiddleware

# Function: defineClassMiddleware()

> **defineClassMiddleware**\<`U`, `V`\>(`module`, `options`): [`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>

Defined in: core/src/BlueprintUtils.ts:207

Defines a class middleware with metadata for the provided module.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`MiddlewareClass`](../../declarations/type-aliases/MiddlewareClass.md)\<`U`, `V`\>

The module handler function to be defined.

### options

`Omit`\<[`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>, `"module"` \| `"isClass"` \| `"isFactory"`\> = `{}`

The metadata options for the middleware.

## Returns

[`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>

The defined class middleware with metadata.
