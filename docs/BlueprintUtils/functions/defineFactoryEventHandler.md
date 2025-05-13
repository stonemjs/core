[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [BlueprintUtils](../README.md) / defineFactoryEventHandler

# Function: defineFactoryEventHandler()

> **defineFactoryEventHandler**\<`U`, `V`\>(`module`): [`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

Defined in: [BlueprintUtils.ts:120](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/BlueprintUtils.ts#L120)

Defines a factory handler with metadata for the provided handler function.
This function allows users to define a factory handler with metadata.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### module

[`FactoryEventHandler`](../../declarations/type-aliases/FactoryEventHandler.md)\<`U`, `V`\>

The module handler function to be defined.

## Returns

[`MetaEventHandler`](../../declarations/interfaces/MetaEventHandler.md)\<`U`, `V`\>

The defined factory handler with metadata.
