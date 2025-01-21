[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / addBlueprint

# Function: addBlueprint()

> **addBlueprint**\<`T`, `U`, `V`\>(`_Class`, `context`, ...`blueprints`): `void`

Defined in: [decorators/Metadata.ts:174](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Metadata.ts#L174)

Add Blueprint on a given decorator context.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

• **U** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### \_Class

`T`

The class to get all metadata from.

### context

`DecoratorContext`

The decorator context where metadata is being set.

### blueprints

...[`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>[]

The list of blueprints.

## Returns

`void`
