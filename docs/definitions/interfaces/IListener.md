[**Core Documentation v0.0.35**](../../README.md)

***

[Core Documentation](../../modules.md) / [definitions](../README.md) / IListener

# Interface: IListener

Defined in: [src/definitions.ts:72](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L72)

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Properties

### handle()

> **handle**: (`event`) => `void` \| `Promise`\<`void`\>

Defined in: [src/definitions.ts:78](https://github.com/stonemjs/core/blob/c9d95b58ccfb8efcaba0bed7bbf19084836cc28d/src/definitions.ts#L78)

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Parameters

##### event

[`Event`](../../events/Event/classes/Event.md)

The event that was triggered.

#### Returns

`void` \| `Promise`\<`void`\>
