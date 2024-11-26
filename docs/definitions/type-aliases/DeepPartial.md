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

[src/definitions.ts:295](https://github.com/stonemjs/core/blob/40e6656006329b0d27f05f845f48db22a574f5ce/src/definitions.ts#L295)
