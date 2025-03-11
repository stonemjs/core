[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / BlueprintContext

# Interface: BlueprintContext\<BlueprintType, ModuleType\>

Defined in: [core/src/declarations.ts:556](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L556)

ConfigContext Interface.

Represents the context object for configuration, which contains the modules and blueprint used to configure the system.

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../type-aliases/IBlueprint.md) = [`IBlueprint`](../type-aliases/IBlueprint.md)

• **ModuleType** = [`ClassType`](../type-aliases/ClassType.md) \| `PipeClass`

## Properties

### blueprint

> `readonly` **blueprint**: `BlueprintType`

Defined in: [core/src/declarations.ts:563](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L563)

The configuration blueprint.

***

### modules

> `readonly` **modules**: `ModuleType`[]

Defined in: [core/src/declarations.ts:568](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L568)

List of configuration modules.
