[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalAccessorDecorator

# Type Alias: ProposalAccessorDecorator()\<T\>

> **ProposalAccessorDecorator**\<`T`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [core/src/declarations.ts:958](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L958)

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
