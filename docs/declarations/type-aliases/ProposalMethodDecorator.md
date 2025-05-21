[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ProposalMethodDecorator

# Type Alias: ProposalMethodDecorator()\<T\>

> **ProposalMethodDecorator**\<`T`\> = \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:1084](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L1084)

Represents a method decorator using the 2023-11 proposal syntax.

A function that decorates a class method and optionally returns a new method implementation.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

The type of the method being decorated.

## Type Parameters

### TFunction

`TFunction` *extends* `T`

## Parameters

### target

`TFunction`

The class prototype or static target containing the method.

### context

`ClassMethodDecoratorContext`\<`T`\>

The context object providing metadata about the method.

## Returns

`TFunction` \| `undefined`

The original or a modified method, or `undefined`.
