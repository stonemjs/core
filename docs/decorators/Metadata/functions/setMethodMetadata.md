[**Core Documentation v0.0.32**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../../modules.md) / [decorators/Metadata](../README.md) / setMethodMetadata

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

[src/decorators/Metadata.ts:83](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/decorators/Metadata.ts#L83)
