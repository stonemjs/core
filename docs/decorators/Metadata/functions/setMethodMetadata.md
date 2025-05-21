[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / setMethodMetadata

# Function: setMethodMetadata()

> **setMethodMetadata**\<`T`\>(`key`, `value`): `MethodDecorator`

Defined in: [decorators/Metadata.ts:147](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/Metadata.ts#L147)

Set metadata on a class method using a method decorator.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

## Parameters

### key

`PropertyKey`

The key for the metadata entry.

### value

`unknown`

The value of the metadata entry.

## Returns

`MethodDecorator`

A method decorator function that sets the metadata.
