[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [StoneFactory](../README.md) / StoneFactoryOptions

# Interface: StoneFactoryOptions

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

> **blueprint**: [`IBlueprint`](../../definitions/type-aliases/IBlueprint.md)

The core configuration object for the Stone.js framework.

#### Defined in

[src/StoneFactory.ts:30](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/StoneFactory.ts#L30)
