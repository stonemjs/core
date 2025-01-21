[**Core Documentation v0.0.36**](../../../README.md)

***

[Core Documentation](../../../modules.md) / [options/StoneBlueprint](../README.md) / StoneBlueprint

# Interface: StoneBlueprint\<U, V\>

Defined in: [options/StoneBlueprint.ts:133](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/StoneBlueprint.ts#L133)

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

Defined in: [options/StoneBlueprint.ts:137](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/options/StoneBlueprint.ts#L137)

Application-level settings, including environment, middleware, logging, and service registration.
