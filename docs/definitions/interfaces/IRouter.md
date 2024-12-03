[**Core Documentation v0.0.33**](../../README.md) • **Docs**

***

[Core Documentation v0.0.33](../../modules.md) / [definitions](../README.md) / IRouter

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

[src/definitions.ts:369](https://github.com/stonemjs/core/blob/08021ed6e90932028c37aa9d72d99b714efcda42/src/definitions.ts#L369)
