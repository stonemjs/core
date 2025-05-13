[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / BlueprintContext

# Interface: BlueprintContext\<BlueprintType, ModuleType\>

Defined in: [declarations.ts:584](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L584)

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

Defined in: [declarations.ts:591](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L591)

The configuration blueprint.

***

### modules

> `readonly` **modules**: `ModuleType`[]

Defined in: [declarations.ts:596](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L596)

List of configuration modules.
