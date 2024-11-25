[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [utils](../README.md) / defineAppBlueprint

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

[src/utils.ts:46](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/utils.ts#L46)
