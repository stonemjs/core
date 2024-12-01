[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

DeepPartial Type.

Represents a type that recursively makes all properties optional.

## Type Parameters

• **T**

## Defined in

[src/definitions.ts:265](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L265)
