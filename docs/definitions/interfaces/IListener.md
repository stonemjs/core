[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / IListener

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

[src/definitions.ts:65](https://github.com/stonemjs/core/blob/077f74fd791b5cd8637e1ab41cbefa238af9d384/src/definitions.ts#L65)
