[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / factoryErrorHandler

# Function: factoryErrorHandler()

> **factoryErrorHandler**\<`U`, `V`\>(`module`): [`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:166](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/utils.ts#L166)

Defines a factory error handler with metadata for the provided handler function.
This function allows users to define a factory error handler with metadata.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryErrorHandler`](../../declarations/type-aliases/FactoryErrorHandler.md)\<`U`, `V`\>

The module handler function to be defined.

## Returns

[`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

The defined error handler with metadata.
