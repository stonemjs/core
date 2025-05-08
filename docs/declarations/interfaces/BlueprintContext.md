[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintContext

# Interface: BlueprintContext\<BlueprintType, ModuleType\>

Defined in: [core/src/declarations.ts:584](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L584)

ConfigContext Interface.

Represents the context object for configuration, which contains the modules and blueprint used to configure the system.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

• **ModuleType** = [`ClassType`](../type-aliases/ClassType.md) \| `PipeClass`

## Properties

### blueprint

> `readonly` **blueprint**: `BlueprintType`

Defined in: [core/src/declarations.ts:591](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L591)

The configuration blueprint.

***

### modules

> `readonly` **modules**: `ModuleType`[]

Defined in: [core/src/declarations.ts:596](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L596)

List of configuration modules.
