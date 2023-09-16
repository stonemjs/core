[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [utils](../README.md) / mergeBlueprints

# Function: mergeBlueprints()

> **mergeBlueprints**(...`blueprints`): [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

Merges multiple blueprints into a single application blueprint.

This function takes any number of blueprint objects and merges them into one,
with later blueprints overwriting properties of earlier ones in case of conflicts.
It uses deep merging to ensure nested properties are also combined appropriately.
Note: The `deepmerge` function can lead to unexpected results if objects have circular references.
Consider handling such cases or documenting this behavior if it applies to your usage.

## Parameters

• ...**blueprints**: [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)[]

An array of blueprints to be merged.

## Returns

[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

The merged application blueprint.

## Throws

- If any of the provided blueprints are not valid objects.

## Example

```typescript
const mergedBlueprint = mergeBlueprints(blueprint1, blueprint2);
```

## Defined in

[src/utils.ts:23](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/utils.ts#L23)
