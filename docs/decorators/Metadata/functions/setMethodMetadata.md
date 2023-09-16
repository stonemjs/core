[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Metadata](../README.md) / setMethodMetadata

# Function: setMethodMetadata()

> **setMethodMetadata**\<`T`, `V`\>(`key`, `value`): (`_`, `context`) => `void`

Set metadata on a class method using a method decorator.

## Type Parameters

• **T** = `unknown`

• **V** *extends* [`ClassMethodType`](../../../definitions/type-aliases/ClassMethodType.md) = [`ClassMethodType`](../../../definitions/type-aliases/ClassMethodType.md)

## Parameters

• **key**: `PropertyKey`

The key for the metadata entry.

• **value**: `unknown`

The value of the metadata entry.

## Returns

`Function`

A method decorator function that sets the metadata.

### Parameters

• **\_**: `V`

• **context**: `ClassMethodDecoratorContext`\<`T`, `V`\>

### Returns

`void`

## Defined in

[src/decorators/Metadata.ts:81](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/decorators/Metadata.ts#L81)
