[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ILifecycleAdapterEventHandler

# Interface: ILifecycleAdapterEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:1188](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1188)

ILifecycleAdapterEventHandler Interface.

Represents a lifecycle event handler with hooks for initialization, pre-handling, handling, and termination phases.

## Template

UResponse

## Type Parameters

### TEvent

`TEvent` *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

### UResponse

`UResponse` *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### handle

> **handle**: [`FunctionalAdapterEventHandler`](../type-aliases/FunctionalAdapterEventHandler.md)\<`TEvent`, `UResponse`\>

Defined in: [declarations.ts:1191](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1191)

***

### onEventHandled()?

> `optional` **onEventHandled**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1192](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1192)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onHandlingEvent()?

> `optional` **onHandlingEvent**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1190](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1190)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onInit()?

> `optional` **onInit**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1189](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1189)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1193](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L1193)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>
