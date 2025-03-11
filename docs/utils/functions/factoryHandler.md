[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / factoryHandler

# Function: factoryHandler()

> **factoryHandler**\<`U`, `V`\>(`module`): [`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:153](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/utils.ts#L153)

Defines a factory handler with metadata for the provided handler function.
This function allows users to define a factory handler with metadata.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryEventHandler`](../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

The module handler function to be defined.

## Returns

[`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

The defined factory handler with metadata.
