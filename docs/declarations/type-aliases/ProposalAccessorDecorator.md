[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalAccessorDecorator

# Type Alias: ProposalAccessorDecorator()\<T\>

> **ProposalAccessorDecorator**\<`T`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:666](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L666)

Represents an accessor decorator using the 2023-11 proposal syntax.

A function that decorates a getter or setter method and optionally returns a new implementation.

## Type Parameters

• **T** *extends* `Function` = `Function`

The type of the accessor being decorated.

## Type Parameters

• **TFunction** *extends* `T`

## Parameters

### target

`TFunction`

The class prototype or static target containing the accessor.

### context

`ClassAccessorDecoratorContext`\<`T`\>

The context object providing metadata about the accessor.

## Returns

`TFunction` \| `undefined`

The original or a modified accessor, or `undefined`.
