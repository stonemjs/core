[**Core Documentation v0.0.35**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / classDecoratorLegacyWrapper

# Function: classDecoratorLegacyWrapper()

> **classDecoratorLegacyWrapper**\<`T`\>(`decorator`): `ClassDecorator`

Defined in: [src/decorators/Metadata.ts:232](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/decorators/Metadata.ts#L232)

Wraps a class decorator to ensure compatibility with both legacy and 2023-11 proposal contexts.

This wrapper enforces that the decorator is only applied in a valid 2023-11 proposal context
and throws appropriate errors for unsupported usage.

## Type Parameters

• **T** *extends* [`ClassType`](../../../definitions/type-aliases/ClassType.md) = [`ClassType`](../../../definitions/type-aliases/ClassType.md)

The type of the class being decorated.

## Parameters

### decorator

[`ProposalClassDecorator`](../../../definitions/type-aliases/ProposalClassDecorator.md)\<`T`\>

The class decorator function conforming to the 2023-11 proposal.

## Returns

`ClassDecorator`

A legacy-compatible `ClassDecorator` that works with TypeScript's expectations.

## Throws

If the decorator is used outside the 2023-11 context or on invalid targets.
