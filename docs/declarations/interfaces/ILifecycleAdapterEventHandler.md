[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ILifecycleAdapterEventHandler

# Interface: ILifecycleAdapterEventHandler\<TEvent, UResponse\>

Defined in: [core/src/declarations.ts:1032](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1032)

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

Defined in: [core/src/declarations.ts:1035](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1035)

***

### onEventHandled()?

> `optional` **onEventHandled**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1036](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1036)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onHandlingEvent()?

> `optional` **onHandlingEvent**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1034](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1034)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onInit()?

> `optional` **onInit**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1033](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1033)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

***

### onTerminate()?

> `optional` **onTerminate**: () => [`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>

Defined in: [core/src/declarations.ts:1037](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L1037)

#### Returns

[`Promiseable`](../type-aliases/Promiseable.md)\<`void`\>
