[**Core Documentation v0.0.36**](../../README.md)

***

[Core Documentation](../../modules.md) / [declarations](../README.md) / IListener

# Interface: IListener

Defined in: [declarations.ts:97](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L97)

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Properties

### handle()

> **handle**: (`event`) => `void` \| `Promise`\<`void`\>

Defined in: [declarations.ts:103](https://github.com/stonemjs/core/blob/9f959fbf0878444ad50749e09c8b1ee612a83d71/src/declarations.ts#L103)

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Parameters

##### event

[`Event`](../../events/Event/classes/Event.md)

The event that was triggered.

#### Returns

`void` \| `Promise`\<`void`\>
