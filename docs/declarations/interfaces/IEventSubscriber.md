[**Core Documentation v0.0.4**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IEventSubscriber

# Interface: IEventSubscriber

Defined in: [core/src/declarations.ts:392](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L392)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe

> **subscribe**: [`FunctionalEventSubscriber`](../type-aliases/FunctionalEventSubscriber.md)

Defined in: [core/src/declarations.ts:398](https://github.com/stonemjs/core/blob/2adc2da4c7e3b5a9f593c198ba7e8ad639651777/src/declarations.ts#L398)

Subscribes to an event emitter to handle various events.

#### Param

The event emitter to subscribe to.
