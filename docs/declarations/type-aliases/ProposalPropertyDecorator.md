[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ProposalPropertyDecorator

# Type Alias: ProposalPropertyDecorator()

> **ProposalPropertyDecorator** = (`target`, `context`) => (`initialValue`) => `unknown` \| `undefined`

Defined in: [declarations.ts:1099](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1099)

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

An initializer function for the property value.

> (`initialValue`): `unknown` \| `undefined`

### Parameters

#### initialValue

`unknown`

### Returns

`unknown` \| `undefined`
