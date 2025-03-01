[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [decorators/Metadata](../README.md) / propertyDecoratorLegacyWrapper

# Function: propertyDecoratorLegacyWrapper()

> **propertyDecoratorLegacyWrapper**(`decorator`): `PropertyDecorator`

Defined in: [core/src/decorators/Metadata.ts:291](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/decorators/Metadata.ts#L291)

Wraps a property decorator to ensure compatibility with both legacy and 2023-11 proposal contexts.

This wrapper enforces that the decorator is only applied in a valid 2023-11 proposal context
and throws appropriate errors for unsupported usage.

## Parameters

### decorator

[`ProposalPropertyDecorator`](../../../declarations/type-aliases/ProposalPropertyDecorator.md)

The property decorator function conforming to the 2023-11 proposal.

## Returns

`PropertyDecorator`

A legacy-compatible `PropertyDecorator` that works with TypeScript's expectations.

## Throws

If the decorator is used outside the 2023-11 context or on invalid targets.
