[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / FunctionalErrorHandler

# Type Alias: FunctionalErrorHandler()\<TEvent, UResponse\>

> **FunctionalErrorHandler**\<`TEvent`, `UResponse`\>: (`error`, `event`) => [`Promiseable`](Promiseable.md)\<`UResponse`\>

Defined in: [core/src/declarations.ts:687](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L687)

FunctionalErrorHandler Type.

Represents a function that handles errors and returns responses.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### error

`any`

The error to handle.

### event

`TEvent`

The incoming event.

## Returns

[`Promiseable`](Promiseable.md)\<`UResponse`\>

The outgoing response.
