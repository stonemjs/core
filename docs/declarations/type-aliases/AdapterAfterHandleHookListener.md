[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AdapterAfterHandleHookListener

# Type Alias: AdapterAfterHandleHookListener()

> **AdapterAfterHandleHookListener**: \<`TEvent`, `UResponse`\>(`blueprint`, `context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:940](https://github.com/stonemjs/core/blob/8c14a336c794eb98d8513b950cb1c2786962eaaf/src/declarations.ts#L940)

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
