[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Metadata](../README.md) / setClassMetadata

# Function: setClassMetadata()

> **setClassMetadata**\<`T`\>(`key`, `value`): (`_`, `context`) => `void`

Set metadata on a class using a class decorator.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

## Parameters

• **key**: `PropertyKey`

The key for the metadata entry.

• **value**: `unknown`

The value of the metadata entry.

## Returns

`Function`

A class decorator function that sets the metadata.

### Parameters

• **\_**: `T`

• **context**: `ClassDecoratorContext`\<`T`\>

### Returns

`void`

## Defined in

[src/decorators/Metadata.ts:70](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Metadata.ts#L70)
