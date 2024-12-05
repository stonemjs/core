[**Core Documentation v0.0.33**](../../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../../modules.md) / [decorators/Metadata](../README.md) / setFieldMetadata

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

[src/decorators/Metadata.ts:96](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/decorators/Metadata.ts#L96)
