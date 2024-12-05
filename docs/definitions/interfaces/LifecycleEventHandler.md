[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / LifecycleEventHandler

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

[src/definitions.ts:189](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L189)

***

### handle

> **handle**: [`EventHandlerFunction`](../type-aliases/EventHandlerFunction.md)\<`W`, `X`\>

#### Defined in

[src/definitions.ts:190](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L190)

***

### onTerminate()?

> `optional` **onTerminate**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:191](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L191)
