[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / setClassMetadata

# Function: setClassMetadata()

> **setClassMetadata**\<`T`\>(`key`, `value`): `ClassDecorator`

Defined in: [core/src/decorators/Metadata.ts:134](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/decorators/Metadata.ts#L134)

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
