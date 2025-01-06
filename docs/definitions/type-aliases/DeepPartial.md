[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / DeepPartial

# Type Alias: DeepPartial\<TValues\>

> **DeepPartial**\<`TValues`\>: `{ [P in keyof TValues]?: TValues[P] extends object ? DeepPartial<TValues[P]> : TValues[P] }`

Defined in: [src/definitions.ts:296](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L296)

DeepPartial Type.

Represents a type that recursively makes all properties optional.

## Type Parameters

• **TValues**
