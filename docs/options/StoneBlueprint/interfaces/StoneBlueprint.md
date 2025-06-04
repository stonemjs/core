[**Core Documentation**](../../../README.md)

***

[Core Documentation](../../../README.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint\<U, V\>

Defined in: [options/StoneBlueprint.ts:155](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L155)

Stone blueprint.

This interface defines the main configuration options for the Stone.js framework.
It includes settings for the builder, adapters, and the main application,
while allowing additional custom options to be added.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Indexable

\[`key`: `string`\]: `unknown`

Allow adding any additional custom properties.
The value of the custom properties can be of any type, depending on user requirements.

## Properties

### stone

> **stone**: `Partial`\<[`AppConfig`](AppConfig.md)\<`U`, `V`\>\>

Defined in: [options/StoneBlueprint.ts:159](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/options/StoneBlueprint.ts#L159)

Application-level settings, including environment, middleware, logging, and service registration.
