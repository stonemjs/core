[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / ISubscriber

# Interface: ISubscriber

Defined in: [declarations.ts:112](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L112)

Interface representing a subscriber to an event emitter.

Subscribers implementing this interface can subscribe to an event emitter
and handle multiple types of events.

## Properties

### subscribe()

> **subscribe**: (`eventEmitter`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:118](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L118)

Subscribes to an event emitter to handle various events.

#### Parameters

##### eventEmitter

[`EventEmitter`](../../events/EventEmitter/classes/EventEmitter.md)

The event emitter to subscribe to.

#### Returns

`void` \| `Promise`\<`void`\>
