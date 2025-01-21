[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterAfterHandleListenerHook

# Type Alias: AdapterAfterHandleListenerHook()

> **AdapterAfterHandleListenerHook**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:292](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L292)

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
