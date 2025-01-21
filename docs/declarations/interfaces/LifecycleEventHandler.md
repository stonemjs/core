[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / LifecycleEventHandler

# Interface: LifecycleEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:241](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L241)

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

Defined in: [declarations.ts:245](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L245)

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:243](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L243)

#### Returns

`void` \| `Promise`\<`void`\>

***

### handle

> **handle**: [`EventHandlerFunction`](../type-aliases/EventHandlerFunction.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:244](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L244)

***

### onPrepare()?

> `optional` **onPrepare**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:242](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L242)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:246](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L246)

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

`void` \| `Promise`\<`void`\>
