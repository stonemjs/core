[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [ConfigBuilder](../README.md) / ConfigBuilder

# Class: ConfigBuilder\<BlueprintType, ContextType\>

Defined in: [core/src/ConfigBuilder.ts:31](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L31)

Class representing a ConfigBuilder for the Stone.js framework.

The ConfigBuilder is responsible for constructing and configuring the dynamic, complex structured options required by the Stone.js framework.
It inspects various modules, extracts metadata, and builds the "blueprint" object which serves as the primary configuration for the Stone.js application.
This class also manages middleware used to process and populate the configuration during the application setup.

The ConfigBuilder allows users to create a unified configuration that is used to initialize and bootstrap the Stone.js application,
ensuring all necessary metadata is aggregated into a blueprint that can be used consistently throughout the application lifecycle.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

• **ContextType** *extends* [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\> = [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\>

## Constructors

### new ConfigBuilder()

> `protected` **new ConfigBuilder**\<`BlueprintType`, `ContextType`\>(`options`): [`ConfigBuilder`](ConfigBuilder.md)\<`BlueprintType`, `ContextType`\>

Defined in: [core/src/ConfigBuilder.ts:52](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L52)

Create a ConfigBuilder.

#### Parameters

##### options

[`ConfigBuilderOptions`](../interfaces/ConfigBuilderOptions.md)\<`BlueprintType`, `ContextType`\> = `...`

The options to create a ConfigBuilder.

#### Returns

[`ConfigBuilder`](ConfigBuilder.md)\<`BlueprintType`, `ContextType`\>

## Methods

### build()

> **build**(`modules`, `blueprint`): `Promise`\<`BlueprintType`\>

Defined in: [core/src/ConfigBuilder.ts:73](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L73)

Build the configuration blueprint by extracting metadata from the provided modules.

This method processes the given raw modules, extracts metadata to populate the blueprint,
and returns the resulting configuration blueprint. It allows users to pass a custom blueprint
or use a default one if none is provided.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

##### blueprint

`BlueprintType` = `...`

The initial blueprint to populate, defaults to a newly created Config instance.

#### Returns

`Promise`\<`BlueprintType`\>

A promise that resolves to the populated Blueprint object.

#### Example

```typescript
const configBuilder = ConfigBuilder.create();
const blueprint = await configBuilder.build(rawModules);
```

***

### create()

> `static` **create**\<`BlueprintType`, `ContextType`\>(`options`?): [`ConfigBuilder`](ConfigBuilder.md)\<`BlueprintType`, `ContextType`\>

Defined in: [core/src/ConfigBuilder.ts:41](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/ConfigBuilder.ts#L41)

Create a ConfigBuilder.

#### Type Parameters

• **BlueprintType** *extends* [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

• **ContextType** *extends* [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\> = [`ConfigContext`](../../declarations/interfaces/ConfigContext.md)\<`BlueprintType`\>

#### Parameters

##### options?

[`ConfigBuilderOptions`](../interfaces/ConfigBuilderOptions.md)\<`BlueprintType`, `ContextType`\>

The options to create a ConfigBuilder.

#### Returns

[`ConfigBuilder`](ConfigBuilder.md)\<`BlueprintType`, `ContextType`\>

A new ConfigBuilder instance.
