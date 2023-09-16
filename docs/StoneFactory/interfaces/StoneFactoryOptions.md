[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [StoneFactory](../README.md) / StoneFactoryOptions

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

[src/StoneFactory.ts:28](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/StoneFactory.ts#L28)
