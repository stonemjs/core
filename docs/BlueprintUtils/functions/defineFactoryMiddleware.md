[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineFactoryMiddleware

# Function: defineFactoryMiddleware()

> **defineFactoryMiddleware**\<`U`, `V`\>(`module`, `options`): [`MetaMiddleware`](../../declarations/type-aliases/MetaMiddleware.md)\<`U`, `V`\>

Defined in: [BlueprintUtils.ts:193](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L193)

Defines a factory middleware with metadata for the provided module.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

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
