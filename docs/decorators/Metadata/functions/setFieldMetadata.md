[**Core Documentation v0.0.0**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../../modules.md) / [decorators/Metadata](../README.md) / setFieldMetadata

# Function: setFieldMetadata()

> **setFieldMetadata**\<`T`, `V`\>(`key`, `value`): (`_`, `context`) => `void`

Set metadata on a class field using a field decorator.

## Type Parameters

• **T** = `unknown`

• **V** = `unknown`

## Parameters

• **key**: `PropertyKey`

The key for the metadata entry.

• **value**: `unknown`

The value of the metadata entry.

## Returns

`Function`

A field decorator function that sets the metadata.

### Parameters

• **\_**: `V`

• **context**: `ClassFieldDecoratorContext`\<`T`, `V`\>

### Returns

`void`

## Defined in

[src/decorators/Metadata.ts:94](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/decorators/Metadata.ts#L94)
