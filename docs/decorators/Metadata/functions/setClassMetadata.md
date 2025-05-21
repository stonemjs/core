[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / setClassMetadata

# Function: setClassMetadata()

> **setClassMetadata**\<`T`\>(`key`, `value`): `ClassDecorator`

Defined in: [decorators/Metadata.ts:134](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/decorators/Metadata.ts#L134)

Set metadata on a class using a class decorator.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

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
