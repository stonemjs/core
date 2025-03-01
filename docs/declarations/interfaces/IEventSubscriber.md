[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventSubscriber

# Interface: IEventSubscriber

Defined in: [core/src/declarations.ts:363](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L363)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe

> **subscribe**: [`FunctionalEventSubscriber`](../type-aliases/FunctionalEventSubscriber.md)

Defined in: [core/src/declarations.ts:369](https://github.com/stonemjs/core/blob/4b1b931e44a5db2600109fa7ae2a8b532ed77730/src/declarations.ts#L369)

Subscribes to an event emitter to handle various events.

#### Param

The event emitter to subscribe to.
