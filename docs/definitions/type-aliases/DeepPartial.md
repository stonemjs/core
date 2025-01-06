[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / DeepPartial

# Type Alias: DeepPartial\<TValues\>

> **DeepPartial**\<`TValues`\>: `{ [P in keyof TValues]?: TValues[P] extends object ? DeepPartial<TValues[P]> : TValues[P] }`

Defined in: [src/definitions.ts:296](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L296)

DeepPartial Type.

Represents a type that recursively makes all properties optional.

## Type Parameters

• **TValues**
