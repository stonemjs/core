[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterOnTerminateHookListener

# Type Alias: AdapterOnTerminateHookListener()

> **AdapterOnTerminateHookListener**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:946](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L946)

AdapterOnTerminateHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Parameters

### blueprint

[`IBlueprint`](IBlueprint.md)

### context

`Partial`\<[`HookContext`](../interfaces/HookContext.md)\<`TEvent`, `UResponse`\>\>

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
