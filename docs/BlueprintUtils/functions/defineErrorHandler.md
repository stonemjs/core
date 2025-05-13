[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineErrorHandler

# Function: defineErrorHandler()

> **defineErrorHandler**\<`U`, `V`\>(`module`, `options`): [`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

Defined in: [BlueprintUtils.ts:91](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L91)

Defines an error handler with metadata for the provided handler function.
This function allows users to define an error handler with metadata.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

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
