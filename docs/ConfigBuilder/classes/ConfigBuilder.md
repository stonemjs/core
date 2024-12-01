[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [ConfigBuilder](../README.md) / ConfigBuilder

# Class: ConfigBuilder

Class representing a ConfigBuilder for the Stone.js framework.

The ConfigBuilder is responsible for constructing and configuring the dynamic, complex structured options required by the Stone.js framework.
It inspects various modules, extracts metadata, and builds the "blueprint" object which serves as the primary configuration for the Stone.js application.
This class also manages middleware used to process and populate the configuration during the application setup.

The ConfigBuilder allows users to create a unified configuration that is used to initialize and bootstrap the Stone.js application,
ensuring all necessary metadata is aggregated into a blueprint that can be used consistently throughout the application lifecycle.

## Author

Mr. Stone <evensstone@gmail.com>

## Constructors

### new ConfigBuilder()

> `protected` **new ConfigBuilder**(`options`): [`ConfigBuilder`](ConfigBuilder.md)

Create a ConfigBuilder.

#### Parameters

• **options**: [`ConfigBuilderOptions`](../interfaces/ConfigBuilderOptions.md) = `...`

The options to create a ConfigBuilder.

#### Returns

[`ConfigBuilder`](ConfigBuilder.md)

#### Defined in

[src/ConfigBuilder.ts:50](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/ConfigBuilder.ts#L50)

## Methods

### build()

> **build**(`rawModules`, `blueprint`): `Promise`\<[`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)\>

Build the configuration blueprint by extracting metadata from the provided modules.

This method processes the given raw modules, extracts metadata to populate the blueprint,
and returns the resulting configuration blueprint. It allows users to pass a custom blueprint
or use a default one if none is provided.

#### Parameters

• **rawModules**: [`ConfigRawModules`](../../definitions/type-aliases/ConfigRawModules.md)

The modules to build the configuration from, organized by module names.

• **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md) = `...`

The initial blueprint to populate, defaults to a newly created Config instance.

#### Returns

`Promise`\<[`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)\>

A promise that resolves to the populated Blueprint object.

#### Example

```typescript
const configBuilder = ConfigBuilder.create();
const blueprint = await configBuilder.build(rawModules);
```

#### Defined in

[src/ConfigBuilder.ts:71](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/ConfigBuilder.ts#L71)

***

### create()

> `static` **create**(`options`?): [`ConfigBuilder`](ConfigBuilder.md)

Create a ConfigBuilder.

#### Parameters

• **options?**: [`ConfigBuilderOptions`](../interfaces/ConfigBuilderOptions.md)

The options to create a ConfigBuilder.

#### Returns

[`ConfigBuilder`](ConfigBuilder.md)

A new ConfigBuilder instance.

#### Defined in

[src/ConfigBuilder.ts:41](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/ConfigBuilder.ts#L41)
