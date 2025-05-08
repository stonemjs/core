[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalClassDecorator

# Type Alias: ProposalClassDecorator()\<TClass\>

> **ProposalClassDecorator**\<`TClass`\>: \<`TFunction`\>(`target`, `context`) => `TFunction` \| `undefined`

Defined in: [core/src/declarations.ts:913](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L913)

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
