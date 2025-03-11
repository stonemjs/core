[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / EventHandlerClass

# Type Alias: EventHandlerClass()\<TEvent, UResponse\>

> **EventHandlerClass**\<`TEvent`, `UResponse`\>: (...`args`) => [`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:412](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L412)

Represents a LifecycleEventHandler class.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** = `unknown`

## Parameters

### args

...`any`[]

## Returns

[`IEventHandler`](../interfaces/IEventHandler.md)\<`TEvent`, `UResponse`\>
