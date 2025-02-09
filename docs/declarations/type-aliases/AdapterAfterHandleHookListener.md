[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterAfterHandleHookListener

# Type Alias: AdapterAfterHandleHookListener()

> **AdapterAfterHandleHookListener**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:939](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L939)

AdapterAfterHandleHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

### context

[`HookContext`](../interfaces/HookContext.md)\<`TEvent`, `UResponse`\>

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
