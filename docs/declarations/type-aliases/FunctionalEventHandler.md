[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalEventHandler

# Type Alias: FunctionalEventHandler()\<TEvent, UResponse\>

> **FunctionalEventHandler**\<`TEvent`, `UResponse`\>: (`incomingEvent`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [core/src/declarations.ts:463](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L463)

FunctionalEventHandler.

Represents a function that handles incoming events and returns an outgoing response.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### incomingEvent

`TEvent`

The incoming event to handle.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
