[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalPropertyDecorator

# Type Alias: ProposalPropertyDecorator()

> **ProposalPropertyDecorator**: (`target`, `context`) => (`initialValue`) => `unknown` \| `undefined`

Defined in: [declarations.ts:651](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L651)

Represents a property decorator using the 2023-11 proposal syntax.

A function that decorates a class field and optionally returns an initializer function
to define the property's initial value.

## Parameters

### target

`undefined`

Always `undefined` for field decorators.

### context

`ClassFieldDecoratorContext`

The context object providing metadata about the field.

## Returns

`Function`

An initializer function for the property value.

### Parameters

#### initialValue

`unknown`

### Returns

`unknown` \| `undefined`
