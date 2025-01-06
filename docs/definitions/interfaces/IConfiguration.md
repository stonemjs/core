[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IConfiguration

# Interface: IConfiguration\<TResponse\>

Defined in: [src/definitions.ts:371](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L371)

Configuration Interface.

Represents a configuration with an optional load method to asynchronously load configurations.

## Type Parameters

• **TResponse**

## Properties

### load()?

> `optional` **load**: () => `TResponse` \| `Promise`\<`TResponse`\>

Defined in: [src/definitions.ts:372](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L372)

#### Returns

`TResponse` \| `Promise`\<`TResponse`\>
