[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [definitions](../README.md) / IListener

# Interface: IListener

Interface representing a listener for handling specific events.

Listeners implementing this interface should define a `handle` method
that is called whenever the associated event occurs.

## Properties

### handle()

> **handle**: (`event`) => `void` \| `Promise`\<`void`\>

Handles the event when it occurs. This method contains the logic that runs when the event is triggered.

#### Parameters

• **event**: [`Event`](../../events/Event/classes/Event.md)

The event that was triggered.

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/definitions.ts:65](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L65)
