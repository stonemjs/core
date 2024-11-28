[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / LifecycleEventHandler

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

[src/definitions.ts:190](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L190)

***

### handle

> **handle**: [`EventHandlerFunction`](../type-aliases/EventHandlerFunction.md)\<`W`, `X`\>

#### Defined in

[src/definitions.ts:191](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L191)

***

### onInit()?

> `optional` **onInit**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:189](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L189)

***

### onTerminate()?

> `optional` **onTerminate**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:192](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L192)
