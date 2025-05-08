[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [StoneFactory](../README.md) / stoneApp

# Function: stoneApp()

> **stoneApp**\<`U`, `V`\>(`options`): [`StoneFactory`](../classes/StoneFactory.md)\<`U`, `V`\>

Defined in: [core/src/StoneFactory.ts:216](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/StoneFactory.ts#L216)

Create a new Stone instance with the given options.

This function creates a new Stone instance with the provided options.
It allows you to configure the application using the StoneFactory.

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### options

[`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md) = `{}`

The options to create the Stone instance.

## Returns

[`StoneFactory`](../classes/StoneFactory.md)\<`U`, `V`\>

A new StoneFactory instance.
