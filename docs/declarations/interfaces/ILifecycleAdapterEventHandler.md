[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ILifecycleAdapterEventHandler

# Interface: ILifecycleAdapterEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:1002](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1002)

ILifecycleAdapterEventHandler Interface.

Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

UResponse

## Type Parameters

• **TEvent** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **UResponse** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### handle

> **handle**: [`FunctionalAdapterEventHandler`](../type-aliases/FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [core/src/declarations.ts:1005](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1005)

***

### onEventHandled()?

> `optional` **onEventHandled**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1006](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1006)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onHandlingEvent()?

> `optional` **onHandlingEvent**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1004](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1004)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onInit()?

> `optional` **onInit**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1003](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1003)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1007](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L1007)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>
