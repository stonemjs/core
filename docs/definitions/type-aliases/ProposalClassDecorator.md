[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / ProposalClassDecorator

# Type Alias: ProposalClassDecorator()\<TClass\>

> **ProposalClassDecorator**\<`TClass`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [src/definitions.ts:563](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L563)

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
