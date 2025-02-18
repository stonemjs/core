[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneBuilder](../README.md) / stoneApp

# Function: stoneApp()

> **stoneApp**\<`U`, `V`\>(`options`): [`StoneBuilder`](../classes/StoneBuilder.md)\<`U`, `V`\>

Defined in: [core/src/StoneBuilder.ts:227](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/StoneBuilder.ts#L227)

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
