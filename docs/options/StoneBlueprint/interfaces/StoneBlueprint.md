[**Core Documentation v0.0.4**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint\<U, V\>

Defined in: [core/src/options/StoneBlueprint.ts:155](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/options/StoneBlueprint.ts#L155)

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

Defined in: [core/src/options/StoneBlueprint.ts:159](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/options/StoneBlueprint.ts#L159)

Application-level settings, including environment, middleware, logging, and service registration.
