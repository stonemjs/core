[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / defineHandler

# Function: defineHandler()

> **defineHandler**\<`U`, `V`\>(`module`, `options`): [`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:109](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/utils.ts#L109)

Defines an application handler with metadata for the provided handler function.
This function allows users to define an application handler with metadata.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`EventHandlerType`](../../declarations/type-aliases/EventHandlerType.md)\<`U`, `V`\>

The module handler function to be defined.

### options

`Omit`\<[`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>, `"module"`\> = `{}`

The metadata options for the handler.

## Returns

[`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

The defined application handler with metadata.
