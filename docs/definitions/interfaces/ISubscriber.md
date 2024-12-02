[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [definitions](../README.md) / ISubscriber

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

[src/definitions.ts:80](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L80)
