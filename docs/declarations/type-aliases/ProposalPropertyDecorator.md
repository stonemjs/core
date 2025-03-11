[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ProposalPropertyDecorator

# Type Alias: ProposalPropertyDecorator()

> **ProposalPropertyDecorator**: (`target`, `context`) => (`initialValue`) => `unknown` \| `undefined`

Defined in: [core/src/declarations.ts:914](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L914)

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
