[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalMethodDecorator

# Type Alias: ProposalMethodDecorator()\<T\>

> **ProposalMethodDecorator**\<`T`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:636](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L636)

Represents a method decorator using the 2023-11 proposal syntax.

A function that decorates a class method and optionally returns a new method implementation.

## Type Parameters

• **T** *extends* `Function` = `Function`

The type of the method being decorated.

## Type Parameters

• **TFunction** *extends* `T`

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
