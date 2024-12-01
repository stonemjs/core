[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [utils](../README.md) / defineAppBlueprint

# Function: defineAppBlueprint()

> **defineAppBlueprint**(...`userBlueprints`): [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

Defines an application blueprint by merging user-defined blueprints with default options.

This function allows users to define their own blueprints and merges them with
the default blueprint options provided by the framework.
It ensures that all necessary properties are available while allowing user customizations.

## Parameters

• ...**userBlueprints**: [`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)[]

An array of partial user-defined blueprints to be merged with defaults.

## Returns

[`StoneBlueprint`](../../options/StoneBlueprint/interfaces/StoneBlueprint.md)

The fully defined application blueprint.

## Throws

- If any of the provided blueprints are not valid objects.

## Example

```typescript
const appBlueprint = defineAppBlueprint(customBlueprint1, customBlueprint2);
```

## Defined in

[src/utils.ts:46](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/utils.ts#L46)
