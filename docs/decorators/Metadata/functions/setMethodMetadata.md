[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / setMethodMetadata

# Function: setMethodMetadata()

> **setMethodMetadata**\<`T`\>(`key`, `value`): `MethodDecorator`

Defined in: [decorators/Metadata.ts:147](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/decorators/Metadata.ts#L147)

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
