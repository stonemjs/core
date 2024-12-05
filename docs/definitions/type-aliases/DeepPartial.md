[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / DeepPartial

# Type Alias: DeepPartial\<T\>

> **DeepPartial**\<`T`\>: `{ [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] }`

DeepPartial Type.

Represents a type that recursively makes all properties optional.

## Type Parameters

• **T**

## Defined in

[src/definitions.ts:265](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L265)
