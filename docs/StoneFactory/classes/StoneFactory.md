[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory

Defined in: [core/src/StoneFactory.ts:13](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/StoneFactory.ts#L13)

Class representing StoneFactory.

The StoneFactory is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Author

Mr. Stone <evensstone@gmail.com>

## Methods

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/StoneFactory.ts:47](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/StoneFactory.ts#L47)

Run the application by resolving and executing the adapter.

#### Type Parameters

• **ExecutionResultType** = `unknown`

#### Returns

`Promise`\<`ExecutionResultType`\>

A promise that resolves to the result of the adapter's `run` method.

#### Throws

If no adapter resolver or adapter is provided in the blueprint.

#### Example

```typescript
await factory.run();
```

***

### create()

> `static` **create**(`blueprint`): [`StoneFactory`](StoneFactory.md)

Defined in: [core/src/StoneFactory.ts:25](https://github.com/stonemjs/core/blob/d2167ff53d508d3a75c05f0cf962180518d3e061/src/StoneFactory.ts#L25)

Create a new StoneFactory instance.

#### Parameters

##### blueprint

[`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

The blueprint object that contains the configuration for the application.

#### Returns

[`StoneFactory`](StoneFactory.md)

A new StoneFactory instance.

#### Example

```typescript
const factory = StoneFactory.create(blueprint);
```
