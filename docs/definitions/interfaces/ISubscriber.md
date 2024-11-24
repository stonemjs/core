[**Core Documentation v0.0.0**](../../README.md) • **Docs**

***

[Core Documentation v0.0.0](../../modules.md) / [definitions](../README.md) / ISubscriber

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

[src/definitions.ts:80](https://github.com/stonemjs/core/blob/be89f756f02a94c320588453a86b3e95bc4e060f/src/definitions.ts#L80)
