[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [blueprint/BlueprintBuilder](../README.md) / BlueprintBuilder

# Class: BlueprintBuilder\<BlueprintType, ContextType\>

Defined in: [blueprint/BlueprintBuilder.ts:17](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintBuilder.ts#L17)

Class representing a BlueprintBuilder for the Stone.js framework.

The BlueprintBuilder is responsible for constructing and configuring the dynamic, complex structured options required by the Stone.js framework.
It introspects various modules, extracts metadata, and builds the "blueprint" object which serves as the primary configuration for the Stone.js application.
This class also manages middleware used to process and populate the configuration during the application setup.

The BlueprintBuilder allows users to create a unified configuration that is used to initialize and bootstrap the Stone.js application,
ensuring all necessary metadata is aggregated into a blueprint that can be used consistently throughout the application lifecycle.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

### ContextType

`ContextType` *extends* [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\> = [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`\>

## Implements

- [`IBlueprintBuilder`](../../../declarations/interfaces/IBlueprintBuilder.md)\<`BlueprintType`\>

## Methods

### build()

> **build**(`modules`): `Promise`\<`BlueprintType`\>

Defined in: [blueprint/BlueprintBuilder.ts:64](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintBuilder.ts#L64)

Build the configuration blueprint by extracting metadata from the provided modules.

#### Parameters

##### modules

`unknown`[]

The modules to build the configuration from.

#### Returns

`Promise`\<`BlueprintType`\>

The configuration blueprint.

#### Example

```typescript
const BlueprintBuilder = BlueprintBuilder.create(Config.create());
const blueprint = await BlueprintBuilder.build(rawModules);
```

#### Implementation of

[`IBlueprintBuilder`](../../../declarations/interfaces/IBlueprintBuilder.md).[`build`](../../../declarations/interfaces/IBlueprintBuilder.md#build)

***

### create()

> `static` **create**\<`BlueprintType`, `ContextType`\>(`blueprint`): `BlueprintBuilder`\<`BlueprintType`, `ContextType`\>

Defined in: [blueprint/BlueprintBuilder.ts:31](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/blueprint/BlueprintBuilder.ts#L31)

Create a BlueprintBuilder.

#### Type Parameters

##### BlueprintType

`BlueprintType` *extends* [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md) = [`IBlueprint`](../../../declarations/type-aliases/IBlueprint.md)

##### ContextType

`ContextType` *extends* [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`, `PipeClass` \| [`ClassType`](../../../declarations/type-aliases/ClassType.md)\<`any`\>\> = [`BlueprintContext`](../../../declarations/interfaces/BlueprintContext.md)\<`BlueprintType`, `PipeClass` \| [`ClassType`](../../../declarations/type-aliases/ClassType.md)\<`any`\>\>

#### Parameters

##### blueprint

`BlueprintType`

The blueprint to create a BlueprintBuilder.

#### Returns

`BlueprintBuilder`\<`BlueprintType`, `ContextType`\>

A new BlueprintBuilder instance.
