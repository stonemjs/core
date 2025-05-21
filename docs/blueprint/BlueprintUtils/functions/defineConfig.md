[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/BlueprintUtils](../README.md) / defineConfig

# Function: defineConfig()

> **defineConfig**(`configuration`): [`ConfigurationClass`](../../../declarations/type-aliases/ConfigurationClass.md)

Defined in: [blueprint/BlueprintUtils.ts:128](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/blueprint/BlueprintUtils.ts#L128)

Defines an application blueprint by merging user-defined blueprints with default options.

This function allows users to define their own blueprints and merges them with
the default blueprint options provided by the framework.
It ensures that all necessary properties are available while allowing user customizations.

## Parameters

### configuration

The user-defined blueprint configuration.

[`FunctionalConfiguration`](../../../declarations/type-aliases/FunctionalConfiguration.md) | `Partial`\<`Record`\<`"configure"` \| `"afterConfigure"`, [`FunctionalConfiguration`](../../../declarations/type-aliases/FunctionalConfiguration.md)\>\>

## Returns

[`ConfigurationClass`](../../../declarations/type-aliases/ConfigurationClass.md)

The fully defined application blueprint.

## Example

```typescript
const appBlueprint = defineConfig((blueprint) => {
  blueprint.set('stone.name', 'MyApp')
});
```
