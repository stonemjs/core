[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory

Class representing StoneFactory.

The StoneFactory is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Author

Mr. Stone <evensstone@gmail.com>

## Methods

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

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

#### Defined in

[src/StoneFactory.ts:83](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/StoneFactory.ts#L83)

***

### create()

> `static` **create**(`options`): [`StoneFactory`](StoneFactory.md)

Create a new StoneFactory instance.

#### Parameters

• **options**: [`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md)

The options to create the StoneFactory.

#### Returns

[`StoneFactory`](StoneFactory.md)

A new StoneFactory instance.

#### Example

```typescript
const factory = StoneFactory.create({ blueprint });
```

#### Defined in

[src/StoneFactory.ts:58](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/StoneFactory.ts#L58)
