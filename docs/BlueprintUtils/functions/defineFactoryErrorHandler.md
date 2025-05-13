[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineFactoryErrorHandler

# Function: defineFactoryErrorHandler()

> **defineFactoryErrorHandler**\<`U`, `V`\>(`module`): [`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

Defined in: [BlueprintUtils.ts:133](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L133)

Defines a factory error handler with metadata for the provided handler function.
This function allows users to define a factory error handler with metadata.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryErrorHandler`](../../declarations/type-aliases/FactoryErrorHandler.md)\<`U`, `V`\>

The module handler function to be defined.

## Returns

[`MetaErrorHandler`](../../declarations/interfaces/MetaErrorHandler.md)\<`U`, `V`\>

The defined error handler with metadata.
