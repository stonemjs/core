[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterOnTerminateListenerHook

# Type Alias: AdapterOnTerminateListenerHook()

> **AdapterOnTerminateListenerHook**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:299](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L299)

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
