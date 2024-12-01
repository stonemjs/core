[**Core Documentation v0.0.31**](../../README.md) • **Docs**

***

[Core Documentation v0.0.31](../../modules.md) / [definitions](../README.md) / IListener

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

[src/definitions.ts:65](https://github.com/stonemjs/core/blob/a25677efd9a5f5a45cc90fda3ed3e87df97e6124/src/definitions.ts#L65)
