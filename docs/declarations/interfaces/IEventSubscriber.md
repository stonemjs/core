[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventSubscriber

# Interface: IEventSubscriber

Defined in: [core/src/declarations.ts:364](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L364)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe

> **subscribe**: [`FunctionalEventSubscriber`](../type-aliases/FunctionalEventSubscriber.md)

Defined in: [core/src/declarations.ts:370](https://github.com/stonemjs/core/blob/93efe04ef1a71ad6f49c3b315da54d45ace50f23/src/declarations.ts#L370)

Subscribes to an event emitter to handle various events.

#### Param

The event emitter to subscribe to.
