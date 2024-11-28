[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IRawResponseWrapper

# Interface: IRawResponseWrapper\<R\>

RawResponseBuilder Interface.

Represents a wrapper for building raw responses with specific options and a response function.

## Type Parameters

• **R**

## Properties

### options

> **options**: [`RawResponseOptions`](RawResponseOptions.md)

#### Defined in

[src/definitions.ts:156](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L156)

***

### respond()

> **respond**: () => `R` \| `Promise`\<`R`\>

#### Returns

`R` \| `Promise`\<`R`\>

#### Defined in

[src/definitions.ts:157](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L157)
