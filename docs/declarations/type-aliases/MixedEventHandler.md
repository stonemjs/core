[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / MixedEventHandler

# Type Alias: MixedEventHandler\<TEvent, UResponse\>

> **MixedEventHandler**\<`TEvent`, `UResponse`\> = [`FunctionalEventHandler`](FunctionalEventHandler.md)\<`TEvent`, `UResponse`\> \| [`MetaEventHandler`](../interfaces/MetaEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:650](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L650)

MixedEventHandler Type.

Represents an event handler that can either be a simple function or a meta event handler.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Template

UResponse
