[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [definitions](../README.md) / ConfigContext

# Interface: ConfigContext

ConfigContext Interface.

Represents the context object for configuration, which contains the modules and blueprint used to configure the system.

## Properties

### blueprint

> `readonly` **blueprint**: [`IBlueprint`](../type-aliases/IBlueprint.md)\<`any`\>

The configuration blueprint.

#### Defined in

[src/definitions.ts:235](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L235)

***

### modules

> `readonly` **modules**: `unknown`[]

List of configuration modules.

#### Defined in

[src/definitions.ts:230](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L230)
