[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory\<R\>

Class representing StoneFactory.

The StoneFactory is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Author

Mr. Stone <evensstone@gmail.com>

## Type Parameters

• **R** = `unknown`

The return type of the adapter's `run` method.

## Methods

### run()

> **run**(): `Promise`\<`R`\>

Run the application by resolving and executing the adapter.

#### Returns

`Promise`\<`R`\>

A promise that resolves to the result of the adapter's `run` method.

#### Throws

If no adapter resolver or adapter is provided in the blueprint.

#### Example

```typescript
await factory.run();
```

#### Defined in

[src/StoneFactory.ts:83](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/StoneFactory.ts#L83)

***

### create()

> `static` **create**\<`R`\>(`options`): [`StoneFactory`](StoneFactory.md)\<`R`\>

Create a new StoneFactory instance.

#### Type Parameters

• **R** = `unknown`

#### Parameters

• **options**: [`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md)

The options to create the StoneFactory.

#### Returns

[`StoneFactory`](StoneFactory.md)\<`R`\>

A new StoneFactory instance.

#### Example

```typescript
const factory = StoneFactory.create({ blueprint });
```

#### Defined in

[src/StoneFactory.ts:58](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/StoneFactory.ts#L58)
