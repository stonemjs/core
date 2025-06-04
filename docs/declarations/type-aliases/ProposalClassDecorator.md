[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ProposalClassDecorator

# Type Alias: ProposalClassDecorator()\<TClass\>

> **ProposalClassDecorator**\<`TClass`\> = \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [declarations.ts:1069](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1069)

Represents a class decorator using the 2023-11 proposal syntax.

A function that decorates a class and optionally returns a new constructor.

## Type Parameters

### TClass

`TClass` *extends* [`ClassType`](ClassType.md) = [`ClassType`](ClassType.md)

The type of the class constructor being decorated.

## Type Parameters

### TFunction

`TFunction` *extends* `TClass`

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
