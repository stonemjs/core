[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / StoneFactoryOptions

# Interface: StoneFactoryOptions

Defined in: [StoneFactory.ts:26](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/StoneFactory.ts#L26)

StoneFactoryOptions interface.

This interface defines the configuration options for creating an instance of `StoneFactory`.
The options must include a `blueprint` that defines the core settings and configurations
required by the Stone.js framework.

## Example

```typescript
const factoryOptions: StoneFactoryOptions = {
  blueprint: {
    get: (key: string) => { ... },
    set: (key: string, value: any) => { ... }
  }
};

const stoneFactory = StoneFactory.create(factoryOptions);
```

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

Defined in: [StoneFactory.ts:30](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/StoneFactory.ts#L30)

The core configuration object for the Stone.js framework.
