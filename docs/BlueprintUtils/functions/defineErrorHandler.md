[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [BlueprintUtils](../README.md) / defineErrorHandler

# Function: defineErrorHandler()

> **defineErrorHandler**\<`U`, `V`\>(`module`, `options`): [`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

Defined in: core/src/BlueprintUtils.ts:91

Defines an error handler with metadata for the provided handler function.
This function allows users to define an error handler with metadata.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`ErrorHandlerType`](../../declarations/type-aliases/ErrorHandlerType.md)\<`U`, `V`\>

The module handler function to be defined.

### options

`Omit`\<[`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>, `"module"`\>

The metadata options for the handler.

## Returns

[`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

The defined error handler with metadata.
