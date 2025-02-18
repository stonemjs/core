[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterOnTerminateHookListener

# Type Alias: AdapterOnTerminateHookListener()

> **AdapterOnTerminateHookListener**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:947](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L947)

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
