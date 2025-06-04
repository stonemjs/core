[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [StoneFactory](../README.md) / stoneApp

# Function: stoneApp()

> **stoneApp**\<`U`, `V`\>(`options`): [`StoneFactory`](../classes/StoneFactory.md)\<`U`, `V`\>

Defined in: [StoneFactory.ts:216](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/StoneFactory.ts#L216)

Create a new Stone instance with the given options.

This function creates a new Stone instance with the provided options.
It allows you to configure the application using the StoneFactory.

## Type Parameters

### U

`U` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### V

`V` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### options

[`StoneFactoryOptions`](../interfaces/StoneFactoryOptions.md) = `{}`

The options to create the Stone instance.

## Returns

[`StoneFactory`](../classes/StoneFactory.md)\<`U`, `V`\>

A new StoneFactory instance.
