[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneBuilder](../README.md) / stoneApp

# Function: stoneApp()

> **stoneApp**\<`U`, `V`\>(`options`): [`StoneBuilder`](../classes/StoneBuilder.md)\<`U`, `V`\>

Defined in: [core/src/StoneBuilder.ts:197](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/StoneBuilder.ts#L197)

Create a new Stone instance with the given options.

This function creates a new Stone instance with the provided options.
It allows you to configure the application using the StoneBuilder.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### options

[`StoneBuilderOptions`](../interfaces/StoneBuilderOptions.md) = `{}`

The options to create the Stone instance.

## Returns

[`StoneBuilder`](../classes/StoneBuilder.md)\<`U`, `V`\>

A new StoneBuilder instance.
