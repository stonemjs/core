[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / EventHandlerClass

# Type Alias: EventHandlerClass()\<TEvent, UResponse\>

> **EventHandlerClass**\<`TEvent`, `UResponse`\> = (...`args`) => [`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:574](https://github.com/stonemjs/core/blob/85781fe5b87769612839dd6b850ba45186d357fa/src/declarations.ts#L574)

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
