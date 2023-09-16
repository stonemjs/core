[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / LifecycleEventHandler

# Interface: LifecycleEventHandler\<W, X\>

LifecycleEventHandler Interface.

Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

X

## Type Parameters

• **W** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **X** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### beforeHandle()?

> `optional` **beforeHandle**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:217](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L217)

***

### handle

> **handle**: [`EventHandlerFunction`](../type-aliases/EventHandlerFunction.md)\<`W`, `X`\>

#### Defined in

[src/definitions.ts:218](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L218)

***

### onInit()?

> `optional` **onInit**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:216](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L216)

***

### onTerminate()?

> `optional` **onTerminate**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:219](https://github.com/stonemjs/core/blob/65be5a9387baf469de681455799e33a2688aa3c9/src/definitions.ts#L219)
