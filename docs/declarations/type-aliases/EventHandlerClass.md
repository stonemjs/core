[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerClass

# Type Alias: EventHandlerClass()\<TEvent, UResponse\>

> **EventHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:579](https://github.com/stonemjs/core/blob/e2fddc9518734748c09a72d4b4064dd1d4c1288c/src/declarations.ts#L579)

Represents a LifecycleEventHandler class.

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` = `unknown`

## Parameters

### args

...`any`[]

## Returns

[`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>
