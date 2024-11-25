[**Core Documentation v0.0.2**](../../README.md) • **Docs**

***

[Core Documentation v0.0.2](../../modules.md) / [definitions](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

DeepPartial Type.

Represents a type that recursively makes all properties optional.

## Type Parameters

• **T**

## Defined in

[src/definitions.ts:295](https://github.com/stonemjs/core/blob/dd7eaec566465ef84c36b87b824f8ea9ab76e8fa/src/definitions.ts#L295)
