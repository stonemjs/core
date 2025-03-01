[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintContext

# Interface: BlueprintContext\<BlueprintType, ModuleType\>

Defined in: [core/src/declarations.ts:555](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L555)

ConfigContext Interface.

Represents the context object for configuration, which contains the modules and blueprint used to configure the system.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

• **ModuleType** = [`ClassType`](../type-aliases/ClassType.md) \| `PipeClass`

## Properties

### blueprint

> `readonly` **blueprint**: `BlueprintType`

Defined in: [core/src/declarations.ts:562](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L562)

The configuration blueprint.

***

### modules

> `readonly` **modules**: `ModuleType`[]

Defined in: [core/src/declarations.ts:567](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L567)

List of configuration modules.
