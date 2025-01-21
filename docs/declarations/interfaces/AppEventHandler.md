[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / AppEventHandler

# Interface: AppEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:215](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L215)

AppEventHandler Interface.

Represents a lifecycle app event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md) = [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md) = [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:219](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L219)

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:217](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L217)

#### Returns

`void` \| `Promise`\<`void`\>

***

### handle

> **handle**: [`AppEventHandlerFunction`](../type-aliases/AppEventHandlerFunction.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:218](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L218)

***

### onPrepare()?

> `optional` **onPrepare**: () => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:216](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L216)

#### Returns

`void` \| `Promise`\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:220](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L220)

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

`void` \| `Promise`\<`void`\>
