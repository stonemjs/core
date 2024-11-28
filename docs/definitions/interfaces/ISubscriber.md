[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / ISubscriber

# Interface: ISubscriber

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe()

> **subscribe**: (`eventEmitter`) => `void` \| `Promise`\<`void`\>

Subscribes to an event emitter to handle various events.

#### Parameters

• **eventEmitter**: [`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

The event emitter to subscribe to.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:79](https://github.com/stonemjs/core/blob/063868c8035bce8a9a9b73263c757aec9b0c12c8/src/definitions.ts#L79)
