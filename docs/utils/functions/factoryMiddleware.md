[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / factoryMiddleware

# Function: factoryMiddleware()

> **factoryMiddleware**\<`U`, `V`\>(`module`, `options`): [`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:207](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/utils.ts#L207)

Defines a factory middleware with metadata for the provided module.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryMiddleware`](../../declarations/type-aliases/FactoryMiddleware.md)\<`U`, `V`\>

The module handler function to be defined.

### options

`Omit`\<[`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>, `"module"` \| `"isClass"` \| `"isFactory"`\> = `{}`

The metadata options for the middleware.

## Returns

[`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>

The defined factory middleware with metadata.
