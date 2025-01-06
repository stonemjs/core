[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / AdapterOnTerminateListenerHook

# Type Alias: AdapterOnTerminateListenerHook()

> **AdapterOnTerminateListenerHook**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:248](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L248)

AdapterOnTerminateListenerHook Type.

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

`void` \| `Promise`\<`void`\>
