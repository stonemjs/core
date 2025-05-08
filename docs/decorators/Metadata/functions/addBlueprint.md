[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / addBlueprint

# Function: addBlueprint()

> **addBlueprint**\<`T`, `U`, `V`\>(`_Class`, `context`, ...`blueprints`): `void`

Defined in: [core/src/decorators/Metadata.ts:174](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Metadata.ts#L174)

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

...(`Record`\<`string`, `any`\> \| [`StoneBlueprint`](../../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>)[]

The list of blueprints.

## Returns

`void`
