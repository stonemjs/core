[**Core Documentation v0.0.34**](../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../modules.md) / [utils](../README.md) / defineAppBlueprint

# Function: defineAppBlueprint()

> **defineAppBlueprint**\<`U`, `V`\>(...`userBlueprints`): [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>

Defines an application blueprint by merging user-defined blueprints with default options.

This function allows users to define their own blueprints and merges them with
the default blueprint options provided by the framework.
It ensures that all necessary properties are available while allowing user customizations.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

• ...**userBlueprints**: [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>[]

An array of partial user-defined blueprints to be merged with defaults.

## Returns

[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>

The fully defined application blueprint.

## Throws

- If any of the provided blueprints are not valid objects.

## Example

```typescript
const appBlueprint = defineAppBlueprint(customBlueprint1, customBlueprint2);
```

## Defined in

[src/utils.ts:50](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/utils.ts#L50)
