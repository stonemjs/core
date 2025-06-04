[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [decorators/Metadata](../README.md) / classDecoratorLegacyWrapper

# Function: classDecoratorLegacyWrapper()

> **classDecoratorLegacyWrapper**\<`T`\>(`decorator`): `ClassDecorator`

Defined in: [decorators/Metadata.ts:232](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/decorators/Metadata.ts#L232)

Wraps a class decorator to ensure compatibility with both legacy and 2023-11 proposal contexts.

This wrapper enforces that the decorator is only applied in a valid 2023-11 proposal context
and throws appropriate errors for unsupported usage.

## Type Parameters

### T

`T` *extends* [`ClassType`](../../../declarations/type-aliases/ClassType.md) = [`ClassType`](../../../declarations/type-aliases/ClassType.md)

The type of the class being decorated.

## Parameters

### decorator

[`ProposalClassDecorator`](../../../declarations/type-aliases/ProposalClassDecorator.md)\<`T`\>

The class decorator function conforming to the 2023-11 proposal.

## Returns

`ClassDecorator`

A legacy-compatible `ClassDecorator` that works with TypeScript's expectations.

## Throws

If the decorator is used outside the 2023-11 context or on invalid targets.
