[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / EventHandlerClass

# Type Alias: EventHandlerClass()\<TEvent, UResponse\>

> **EventHandlerClass**\<`TEvent`, `UResponse`\>: (...`args`) => [`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:440](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L440)

Represents a LifecycleEventHandler class.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### args

...`any`[]

## Returns

[`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>
