[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / factoryServiceProvider

# Function: factoryServiceProvider()

> **factoryServiceProvider**\<`U`, `V`\>(`module`): [`MetaServiceProvider`](../../declarations/interfaces/MetaServiceProvider.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:157](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/utils.ts#L157)

Defines a factory service provider with metadata for the provided module.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryServiceProvider`](../../declarations/type-aliases/FactoryServiceProvider.md)\<`U`, `V`\>

The module handler function to be defined.

## Returns

[`MetaServiceProvider`](../../declarations/interfaces/MetaServiceProvider.md)\<`U`, `V`\>

The defined factory service provider with metadata.
