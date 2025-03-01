[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalAccessorDecorator

# Type Alias: ProposalAccessorDecorator()\<T\>

> **ProposalAccessorDecorator**\<`T`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [core/src/declarations.ts:928](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L928)

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
