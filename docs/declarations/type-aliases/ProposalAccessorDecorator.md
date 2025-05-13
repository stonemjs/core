[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ProposalAccessorDecorator

# Type Alias: ProposalAccessorDecorator()\<T\>

> **ProposalAccessorDecorator**\<`T`\> = \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:958](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L958)

Represents an accessor decorator using the 2023-11 proposal syntax.

A function that decorates a getter or setter method and optionally returns a new implementation.

## Type Parameters

### T

`T` *extends* `Function` = `Function`

The type of the accessor being decorated.

## Type Parameters

### TFunction

`TFunction` *extends* `T`

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
