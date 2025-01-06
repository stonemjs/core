[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / LifecycleEventHandler

# Interface: LifecycleEventHandler\<TEvent, UResponse\>

Defined in: [src/definitions.ts:201](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L201)

LifecycleEventHandler Interface.

Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:205](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L205)

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:203](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L203)

#### Returns

`void` \| `Promise`\<`void`\>

***

### handle

> **handle**: [`EventHandlerFunction`](../type-aliases/EventHandlerFunction.md)\<`TEvent`, `UResponse`\>

Defined in: [src/definitions.ts:204](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L204)

***

### onPrepare()?

> `optional` **onPrepare**: () => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:202](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L202)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:206](https://github.com/stonemjs/core/blob/83759020101bdf94fc7c7a0d8609e63689d57c0f/src/definitions.ts#L206)

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

`void` \| `Promise`\<`void`\>
