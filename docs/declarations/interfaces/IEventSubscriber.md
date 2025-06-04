[**Core Documentation**](../../README.md)

***

[Core Documentation](../../README.md) / [declarations](../README.md) / IEventSubscriber

# Interface: IEventSubscriber

Defined in: [declarations.ts:531](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L531)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe

> **subscribe**: [`FunctionalEventSubscriber`](../type-aliases/FunctionalEventSubscriber.md)

Defined in: [declarations.ts:537](https://github.com/stonemjs/core/blob/65c9e07f9d264b07f6e4091fcc29046b5ca8ea45/src/declarations.ts#L537)

Subscribes to an event emitter to handle various events.

#### Param

The event emitter to subscribe to.
