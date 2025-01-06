[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / AdapterAfterHandleListenerHook

# Type Alias: AdapterAfterHandleListenerHook()

> **AdapterAfterHandleListenerHook**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:241](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L241)

AdapterAfterHandleListenerHook Type.

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

`void` \| `Promise`\<`void`\>
