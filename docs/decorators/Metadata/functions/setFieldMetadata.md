[**Core Documentation v0.0.31**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../../modules.md) / [decorators/Metadata](../README.md) / setFieldMetadata

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

[src/decorators/Metadata.ts:94](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/decorators/Metadata.ts#L94)
