[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / addBlueprint

# Function: addBlueprint()

> **addBlueprint**\<`T`, `U`, `V`\>(`_Class`, `context`, ...`blueprints`): `void`

Defined in: [decorators/Metadata.ts:174](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L174)

Add Blueprint on a given decorator context.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md)

### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

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
