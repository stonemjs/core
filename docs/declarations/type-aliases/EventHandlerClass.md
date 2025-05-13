[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerClass

# Type Alias: EventHandlerClass()\<TEvent, UResponse\>

> **EventHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:440](https://github.com/stonemjs/core/blob/e2200da501349da1fec304d821c002bb6d055b61/src/declarations.ts#L440)

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
