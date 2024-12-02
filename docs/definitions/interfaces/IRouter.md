[**Core Documentation v0.0.32**](../../README.md) • **Docs**

***

[Core Documentation v0.0.32](../../modules.md) / [definitions](../README.md) / IRouter

# Interface: IRouter\<U, V\>

Router Interface.

Represents a router that can dispatch incoming events and return outgoing responses.

## Template

V

## Type Parameters

• **U** *extends* [`IncomingEvent`](../../events/IncomingEvent/classes/IncomingEvent.md)

• **V** *extends* [`OutgoingResponse`](../../events/OutgoingResponse/classes/OutgoingResponse.md)

## Properties

### dispatch()

> **dispatch**: (`event`) => `V` \| `Promise`\<`V`\>

#### Parameters

• **event**: `U`

#### Returns

`V` \| `Promise`\<`V`\>

#### Defined in

[src/definitions.ts:369](https://github.com/stonemjs/core/blob/59c27bdae04e7adc72d7c3e25cee704d5e04ce0c/src/definitions.ts#L369)
