[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / BlueprintContext

# Interface: BlueprintContext\<BlueprintType, ModuleType\>

Defined in: [declarations.ts:723](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L723)

ConfigContext Interface.

Represents the context object for configuration, which contains the modules and blueprint used to configure the system.

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

### ModuleType

`ModuleType` = [`ClassType`](../type-aliases/ClassType.md) \| `PipeClass`

## Properties

### blueprint

> `readonly` **blueprint**: `BlueprintType`

Defined in: [declarations.ts:730](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L730)

The configuration blueprint.

***

### modules

> `readonly` **modules**: `ModuleType`[]

Defined in: [declarations.ts:735](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L735)

List of configuration modules.
