[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / ILifecycleAdapterEventHandler

# Interface: ILifecycleAdapterEventHandler\<TEvent, UResponse\>

Defined in: [declarations.ts:1183](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1183)

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

Defined in: [declarations.ts:1186](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1186)

***

### onEventHandled()?

> `optional` **onEventHandled**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1187](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1187)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onHandlingEvent()?

> `optional` **onHandlingEvent**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1185](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1185)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onInit()?

> `optional` **onInit**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1184](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1184)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [declarations.ts:1188](https://github.com/stonemjs/core/blob/b1f29857c7f1e529739f22d486494bed3b22d2c6/src/declarations.ts#L1188)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>
