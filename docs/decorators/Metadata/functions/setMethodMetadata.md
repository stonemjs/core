[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / setMethodMetadata

# Function: setMethodMetadata()

> **setMethodMetadata**\<`T`\>(`key`, `value`): `MethodDecorator`

Defined in: [core/src/decorators/Metadata.ts:147](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/Metadata.ts#L147)

Set metadata on a class method using a method decorator.

## Type Parameters

• **T** *extends* `Function` = `Function`

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
