[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / setClassMetadata

# Function: setClassMetadata()

> **setClassMetadata**\<`T`\>(`key`, `value`): `ClassDecorator`

Defined in: [core/src/decorators/Metadata.ts:134](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/decorators/Metadata.ts#L134)

Set metadata on a class using a class decorator.

## Type Parameters

• **T** *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

## Parameters

### key

`PropertyKey`

The key for the metadata entry.

### value

`unknown`

The value of the metadata entry.

## Returns

`ClassDecorator`

A class decorator function that sets the metadata.
