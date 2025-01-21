[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IConfiguration

# Interface: IConfiguration\<TResponse\>

Defined in: [declarations.ts:440](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L440)

Configuration Interface.

Represents a configuration with an optional load method to asynchronously load configurations.

## Type Parameters

• **TResponse**

## Properties

### load()?

> `optional` **load**: () => `TResponse` \| `Promise`\<`TResponse`\>

Defined in: [declarations.ts:441](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L441)

#### Returns

`TResponse` \| `Promise`\<`TResponse`\>
