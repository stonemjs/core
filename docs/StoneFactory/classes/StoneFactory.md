[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / StoneFactory

# Class: StoneFactory

Defined in: [StoneFactory.ts:41](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/StoneFactory.ts#L41)

Class representing StoneFactory.

The StoneFactory is responsible for creating and running the main application by resolving
the appropriate adapter from the provided blueprint. It handles the core setup of the application.

## Author

Mr. Stone <evensstone@gmail.com>

## Methods

### run()

> **run**\<`ExecutionResultType`\>(): `Promise`\<`ExecutionResultType`\>

Defined in: [StoneFactory.ts:83](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/StoneFactory.ts#L83)

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

Defined in: [StoneFactory.ts:58](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/StoneFactory.ts#L58)

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
