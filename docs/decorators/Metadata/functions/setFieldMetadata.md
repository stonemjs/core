[**Core Documentation v0.0.34**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.34](../../../modules.md) / [decorators/Metadata](../README.md) / setFieldMetadata

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

[src/decorators/Metadata.ts:96](https://github.com/stonemjs/core/blob/805ab978d87a028eb5ea9c9da928beb091ec1971/src/decorators/Metadata.ts#L96)
