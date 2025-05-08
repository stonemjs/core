[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [utils](../README.md) / mergeBlueprints

# Function: mergeBlueprints()

> **mergeBlueprints**\<`U`, `V`\>(...`blueprints`): [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>

Defined in: [core/src/utils.ts:33](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/utils.ts#L33)

Merges multiple blueprints into a single application blueprint.

This function takes any number of blueprint objects and merges them into one,
with later blueprints overwriting properties of earlier ones in case of conflicts.
It uses deep merging to ensure nested properties are also combined appropriately.
Note: The `deepmerge` function can lead to unexpected results if objects have circular references.
Consider handling such cases or documenting this behavior if it applies to your usage.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprints

...(`Record`\<`string`, `any`\> \| [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>)[]

An array of blueprints to be merged.

## Returns

[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)\<`U`, `V`\>

The merged application blueprint.

## Throws

- If any of the provided blueprints are not valid objects.

## Example

```typescript
const mergedBlueprint = mergeBlueprints(blueprint1, blueprint2);
```
