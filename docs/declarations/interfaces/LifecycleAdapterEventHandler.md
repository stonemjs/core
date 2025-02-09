[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / LifecycleAdapterEventHandler

# Interface: LifecycleAdapterEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:885](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L885)

LifecycleAdapterEventHandler Interface.

Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### afterHandle()?

> `optional` **afterHandle**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:889](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L889)

#### Parameters

##### context

[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### beforeHandle()?

> `optional` **beforeHandle**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:887](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L887)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### handle

> **handle**: [`FunctionalAdapterEventHandler`](../type-aliases/FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:888](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L888)

***

### onPrepare()?

> `optional` **onPrepare**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:886](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L886)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: (`context`) => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:890](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L890)

#### Parameters

##### context

`Partial`\<[`HookContext`](HookContext.md)\<`TEvent`, `UResponse`\>\>

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>
