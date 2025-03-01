[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint\<U, V\>

Defined in: [core/src/options/StoneBlueprint.ts:148](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/StoneBlueprint.ts#L148)

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### stone

> **stone**: `Partial`\<[`AppConfig`](AppConfig.md)\<`U`, `V`\>\>

Defined in: [core/src/options/StoneBlueprint.ts:152](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/options/StoneBlueprint.ts#L152)

Application-level settings, including environment, middleware, logging, and service registration.
