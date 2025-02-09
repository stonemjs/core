[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventSubscriber

# Interface: IEventSubscriber

Defined in: [core/src/declarations.ts:379](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L379)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe

> **subscribe**: [`FunctionalEventSubscriber`](../type-aliases/FunctionalEventSubscriber.md)

Defined in: [core/src/declarations.ts:385](https://github.com/stonemjs/core/blob/e4675fc5d1a8e120fdb4d54e226a2496fdda3681/src/declarations.ts#L385)

Subscribes to an event emitter to handle various events.

#### Param

The event emitter to subscribe to.
