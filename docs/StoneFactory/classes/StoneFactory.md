[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory

Defined in: [core/src/StoneFactory.ts:34](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/StoneFactory.ts#L34)

Class representing StoneFactory.

The StoneFactory is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Author

Mr. Stone <evensstone@gmail.com>

## Methods

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [core/src/StoneFactory.ts:76](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/StoneFactory.ts#L76)

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

> `static` **create**(`options`): [`StoneFactory`](StoneFactory.md)

Defined in: [core/src/StoneFactory.ts:51](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/StoneFactory.ts#L51)

Create a new StoneFactory instance.

#### Parameters

##### options

[`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md)

The options to create the StoneFactory.

#### Returns

[`StoneFactory`](StoneFactory.md)

A new StoneFactory instance.

#### Example

```typescript
const factory = StoneFactory.create({ blueprint });
```
