[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / StoneFactoryOptions

# Interface: StoneFactoryOptions

Defined in: [core/src/StoneFactory.ts:19](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/StoneFactory.ts#L19)

StoneFactoryOptions interface.

This interface defines the configuration options for creating an instance of `StoneFactory`.
The options must include a `blueprint` that defines the core settings and configurations
required by the Stone.js framework.

## Example

```typescript
const stoneFactory = StoneFactory.create({ blueprint });
```

## Properties

### blueprint

> **blueprint**: [`IBlueprint`](../../declarations/type-aliases/IBlueprint.md)

Defined in: [core/src/StoneFactory.ts:23](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/StoneFactory.ts#L23)

The core configuration object for the Stone.js framework.
