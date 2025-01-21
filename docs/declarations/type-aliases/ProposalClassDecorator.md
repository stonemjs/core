[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalClassDecorator

# Type Alias: ProposalClassDecorator()\<TClass\>

> **ProposalClassDecorator**\<`TClass`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:621](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L621)

Represents a class decorator using the 2023-11 proposal syntax.

A function that decorates a class and optionally returns a new constructor.

## Type Parameters

• **TClass** *extends* [`ClassType`](ClassType.md) = [`ClassType`](ClassType.md)

The type of the class constructor being decorated.

## Type Parameters

• **TFunction** *extends* `TClass`

## Parameters

### target

`TFunction`

The class constructor to be decorated.

### context

`ClassDecoratorContext`\<`TClass`\>

The context object providing metadata about the class.

## Returns

`TFunction` \| `undefined`

The original or a modified class constructor, or `undefined`.
